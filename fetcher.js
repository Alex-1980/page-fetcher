const request = require('request');
const fs = require('fs');

const args = process.argv.slice(2);
const domain = args[0];
const path = args[1];

request(domain, (error, response, body) => {
  if (error) {
    console.log('error:', error);
  }

  fs.writeFile(path, body, err => {
    if (err) {
      console.error(err);
    } else {
      const stats = fs.statSync(path);
      const fileSize = stats.size;

      console.log(`Downloaded and saved ${fileSize} bytes to ./index.html`);
    }
  });
});