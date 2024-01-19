const path = require('path');
const fs = require('fs');
const filePath = path.join(__dirname, 'text.txt');
const { stdout } = process;
const readStream = fs.createReadStream(filePath);
readStream.on('data', (data) => stdout.write(data));
