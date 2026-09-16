import https from 'https';
import fs from 'fs';

function download(url, dest) {
  const file = fs.createWriteStream(dest);
  const options = {
    headers: {
      'User-Agent': 'GlobalEnterprises/1.0 (https://globalenterprises.in; contact@globalenterprises.in)'
    }
  };
  https.get(url, options, (res) => {
    console.log('Status:', res.statusCode, res.headers.location);
    if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
      download(res.headers.location, dest);
      return;
    }
    res.pipe(file);
    file.on('finish', () => {
      file.close();
      console.log('Downloaded', dest, 'size:', fs.statSync(dest).size);
    });
  }).on('error', (e) => {
    console.error('Error:', e.message);
  });
}

download('https://upload.wikimedia.org/wikipedia/commons/e/e6/Ndrf.png', 'public/logos/clients/ndrf.png');
