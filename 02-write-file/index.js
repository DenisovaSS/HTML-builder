const path = require('path');
const fs = require('fs');
const { stdin, stdout } = process;
const folderPath = path.join(__dirname, 'text2.txt');

const writeStream = fs.createWriteStream(folderPath);
stdout.write('Welcome! Type your text or type "exit" to quit\n');
stdin.on('data', (data) => {
  const text = data.toString().trim();
  if (text.toLowerCase() === 'exit') {
    stdout.write('Goodbye using the exit');
    process.exit();
  } else {
    writeStream.write(text + '\n', (err) => {
      if (err) throw err;
      //  console.log('File was modified');
    });
  }
});
process.on('SIGINT', () => {
  stdout.write('\nGoodbye using the Ctrl+C');
  process.exit();
});
