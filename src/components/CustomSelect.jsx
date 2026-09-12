import React, { useState, useRef, useEffect } from 'react';
import { ChevronDown, Check } from 'lucide-react';

export default function CustomSelect({
  options = [],
  value = '',
  onChange,
  name = '',
  placeholder = 'Select an option',
  className = '',
  direction = 'auto', // 'auto', 'up', 'down'
  disabled = false,
}) {
  const [isOpen, setIsOpen] = useState(false);
  const [openUpward, setOpenUpward] = useState(false);
  const dropdownRef = useRef(null);

  // Close on outside click or Escape key
  useEffect(() => {
    const handleOutsideClick = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setIsOpen(false);
      }
    };

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleOutsideClick);
      document.addEventListener('touchstart', handleOutsideClick);
      document.addEventListener('keydown', handleKeyDown);
    }

    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
      document.removeEventListener('touchstart', handleOutsideClick);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen]);

  const toggleDropdown = () => {
    if (disabled) return;

    if (!isOpen && dropdownRef.current) {
      if (direction === 'up') {
        setOpenUpward(true);
      } else if (direction === 'down') {
        setOpenUpward(false);
      } else {
        // Auto detect available screen space
        const rect = dropdownRef.current.getBoundingClientRect();
        const spaceBelow = window.innerHeight - rect.bottom;
        const spaceAbove = rect.top;
        if (spaceBelow < 230 && spaceAbove > 200) {
          setOpenUpward(true);
        } else {
          setOpenUpward(false);
        }
      }
    }
    setIsOpen((prev) => !prev);
  };

  const handleSelect = (optionValue) => {
    if (onChange) {
      onChange({
        target: {
          name,
          value: optionValue,
        },
      });
    }
    setIsOpen(false);
  };

  // Normalize options array
  const formattedOptions = options.map((opt) => {
    if (typeof opt === 'object' && opt !== null) {
      return { value: opt.value, label: opt.label ?? opt.value };
    }
    return { value: opt, label: opt };
  });

  const activeOption = formattedOptions.find((opt) => String(opt.value) === String(value));
  const displayText = activeOption ? activeOption.label : (value || placeholder);

  return (
    <div ref={dropdownRef} className={`relative select-none text-left ${className}`}>
      {name && <input type="hidden" name={name} value={value} />}

      {/* Dropdown Trigger Button */}
      <button
        type="button"
        onClick={toggleDropdown}
        disabled={disabled}
        aria-haspopup="listbox"
        aria-expanded={isOpen}
        className={`w-full px-3.5 py-2.5 rounded-xl bg-[#120722] border text-xs flex items-center justify-between text-left transition-all duration-200 cursor-pointer focus:outline-none ${
          isOpen
            ? 'border-amber-400 ring-1 ring-amber-400/40 shadow-[0_0_15px_rgba(245,158,11,0.18)] bg-[#17092c]'
            : 'border-white/15 hover:border-amber-400/50 hover:bg-[#160829]'
        } ${disabled ? 'opacity-50 cursor-not-allowed' : ''}`}
      >
        <span className={`truncate pr-2 ${activeOption || value ? 'text-white font-medium' : 'text-gray-400'}`}>
          {displayText}
        </span>
        <ChevronDown
          className={`w-4 h-4 text-amber-400/90 transition-transform duration-200 shrink-0 ${
            isOpen ? 'rotate-180 text-amber-300 scale-110' : ''
          }`}
        />
      </button>

      {/* Themed Dropdown Menu */}
      {isOpen && (
        <div
          role="listbox"
          className={`absolute left-0 right-0 z-[120] py-1.5 rounded-xl bg-[#160829] border border-amber-400/40 shadow-2xl shadow-black/90 backdrop-blur-xl max-h-56 overflow-y-auto overflow-x-hidden ${
            openUpward ? 'bottom-full mb-1.5 origin-bottom' : 'top-full mt-1.5 origin-top'
          }`}
          style={{
            scrollbarWidth: 'thin',
            scrollbarColor: 'rgba(245, 158, 11, 0.4) rgba(22, 8, 41, 0.8)',
            overflowX: 'hidden'
          }}
        >
          {formattedOptions.map((opt, index) => {
            const isSelected = String(opt.value) === String(value);
            return (
              <div
                key={index}
                role="option"
                aria-selected={isSelected}
                onClick={() => handleSelect(opt.value)}
                className={`w-full px-3.5 py-2.5 text-xs transition-all duration-200 cursor-pointer flex items-center justify-between group overflow-hidden ${
                  isSelected
                    ? 'bg-amber-400/20 text-amber-300 font-semibold border-l-2 border-amber-400'
                    : 'text-[#d4c5eb] hover:text-white hover:bg-gradient-to-r hover:from-amber-400/15 hover:to-purple-900/30'
                }`}
              >
                <span className="truncate pr-2 transition-transform duration-200 ease-out group-hover:translate-x-1 group-hover:text-amber-200 inline-block">
                  {opt.label}
                </span>
                {isSelected && (
                  <Check className="w-3.5 h-3.5 text-amber-400 shrink-0 animate-in zoom-in-75 duration-150" />
                )}
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}
