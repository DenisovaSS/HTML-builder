const path = require('path');
const fs = require('fs');
const { stdin, stdout } = process;
const folderPath = path.join(__dirname, 'text2.txt');

const writeStream = fs.createWriteStream(folderPath);
stdout.write('Welcome! Type your text or type "exit" to quit\n');
stdin.on('data', (data) => {
  const text = data.toString().trim();
  //   console.log(name);
  if (text.toLowerCase() === 'exit') {
    console.log('Goodbye using the exit');
    process.exit();
  } else {
    writeStream.write(text + '\n', () => {
      //  console.log('File was modified');
    });
  }
});
process.on('SIGINT', () => {
  console.log('\nGoodbye using the Ctrl+C');
  process.exit();
});
