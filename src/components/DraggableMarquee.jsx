import React, { useRef, useEffect, useState, useCallback } from 'react';

/**
 * DraggableMarquee Component
 * Supports:
 * - Smooth infinite auto-scroll
 * - Pauses on mouse hover
 * - Interactive mouse drag-and-hold (Left & Right)
 * - 2-Finger touchpad / trackpad gesture & horizontal wheel scroll
 * - Touch swipe for mobile devices
 */
export default function DraggableMarquee({ items, renderItem, speed = 1.25, direction = 'left', className = '' }) {
  const containerRef = useRef(null);
  const isDraggingRef = useRef(false);
  const startXRef = useRef(0);
  const scrollLeftRef = useRef(0);
  const animationFrameIdRef = useRef(null);
  const isHoveredRef = useRef(false);
  const [isGrabbing, setIsGrabbing] = useState(false);

  // Duplicated items for infinite seamless scroll
  const duplicatedItems = [...items, ...items, ...items];

  // Auto-scroll loop
  const autoScroll = useCallback(() => {
    const container = containerRef.current;
    if (container) {
      // Only auto-scroll when NOT dragging and NOT hovered by mouse
      if (!isDraggingRef.current && !isHoveredRef.current) {
        const delta = direction === 'left' ? speed : -speed;
        container.scrollLeft += delta;

        // Infinite loop wrap-around logic
        const singleSetWidth = container.scrollWidth / 3;
        if (container.scrollLeft >= singleSetWidth * 2) {
          container.scrollLeft -= singleSetWidth;
        } else if (container.scrollLeft <= 0) {
          container.scrollLeft += singleSetWidth;
        }
      }
    }
    animationFrameIdRef.current = requestAnimationFrame(autoScroll);
  }, [speed, direction]);

  useEffect(() => {
    const container = containerRef.current;
    if (container) {
      // Start in the middle set to allow dragging both left and right initially
      const singleSetWidth = container.scrollWidth / 3;
      container.scrollLeft = singleSetWidth;

      // Add native wheel listener for 2-finger trackpad horizontal scrolling with non-passive option
      const handleWheelNative = (e) => {
        const delta = Math.abs(e.deltaX) > Math.abs(e.deltaY) ? e.deltaX : (e.shiftKey ? e.deltaY : 0);
        if (delta !== 0) {
          e.preventDefault();
          container.scrollLeft += delta;

          const singleWidth = container.scrollWidth / 3;
          if (container.scrollLeft >= singleWidth * 2) {
            container.scrollLeft -= singleWidth;
          } else if (container.scrollLeft <= 0) {
            container.scrollLeft += singleWidth;
          }
        }
      };

      container.addEventListener('wheel', handleWheelNative, { passive: false });

      animationFrameIdRef.current = requestAnimationFrame(autoScroll);

      return () => {
        container.removeEventListener('wheel', handleWheelNative);
        if (animationFrameIdRef.current) {
          cancelAnimationFrame(animationFrameIdRef.current);
        }
      };
    }
  }, [autoScroll]);

  // Mouse Drag Handlers
  const handleMouseDown = (e) => {
    const container = containerRef.current;
    if (!container) return;
    isDraggingRef.current = true;
    setIsGrabbing(true);
    startXRef.current = e.pageX - container.offsetLeft;
    scrollLeftRef.current = container.scrollLeft;
  };

  const handleMouseMove = (e) => {
    if (!isDraggingRef.current) return;
    e.preventDefault();
    const container = containerRef.current;
    if (!container) return;
    const x = e.pageX - container.offsetLeft;
    const walk = (x - startXRef.current) * 1.5; // Drag sensitivity
    container.scrollLeft = scrollLeftRef.current - walk;

    // Boundary wrap during drag
    const singleSetWidth = container.scrollWidth / 3;
    if (container.scrollLeft >= singleSetWidth * 2) {
      container.scrollLeft -= singleSetWidth;
      scrollLeftRef.current -= singleSetWidth;
    } else if (container.scrollLeft <= 0) {
      container.scrollLeft += singleSetWidth;
      scrollLeftRef.current += singleSetWidth;
    }
  };

  const handleMouseUp = () => {
    isDraggingRef.current = false;
    setIsGrabbing(false);
  };

  const handleMouseEnter = () => {
    isHoveredRef.current = true;
  };

  const handleMouseLeave = () => {
    isDraggingRef.current = false;
    setIsGrabbing(false);
    isHoveredRef.current = false;
  };

  // Touch Swipe Handlers (Mobile / 2-finger touch)
  const handleTouchStart = (e) => {
    const container = containerRef.current;
    if (!container) return;
    isDraggingRef.current = true;
    startXRef.current = e.touches[0].pageX - container.offsetLeft;
    scrollLeftRef.current = container.scrollLeft;
  };

  const handleTouchMove = (e) => {
    if (!isDraggingRef.current) return;
    const container = containerRef.current;
    if (!container) return;
    const x = e.touches[0].pageX - container.offsetLeft;
    const walk = (x - startXRef.current) * 1.5;
    container.scrollLeft = scrollLeftRef.current - walk;

    const singleSetWidth = container.scrollWidth / 3;
    if (container.scrollLeft >= singleSetWidth * 2) {
      container.scrollLeft -= singleSetWidth;
      scrollLeftRef.current -= singleSetWidth;
    } else if (container.scrollLeft <= 0) {
      container.scrollLeft += singleSetWidth;
      scrollLeftRef.current += singleSetWidth;
    }
  };

  const handleTouchEnd = () => {
    isDraggingRef.current = false;
  };

  return (
    <div
      ref={containerRef}
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
      className={`flex items-center gap-4 overflow-x-hidden select-none py-3 ${
        isGrabbing ? 'cursor-grabbing' : 'cursor-grab'
      } ${className}`}
      style={{
        WebkitOverflowScrolling: 'touch',
        scrollBehavior: 'auto',
        maskImage: 'linear-gradient(to right, transparent 0%, black 8%, black 92%, transparent 100%)',
        WebkitMaskImage: 'linear-gradient(to right, transparent 0%, black 8%, black 92%, transparent 100%)'
      }}
    >
      {duplicatedItems.map((item, index) => renderItem(item, index))}
    </div>
  );
}
