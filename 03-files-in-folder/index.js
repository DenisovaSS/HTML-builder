const { readdir } = require('fs/promises');
const path = require('path');
const fs = require('fs');
const { Dirent, stat } = require('fs');
const folderPath = path.join(__dirname, 'secret-folder');
async function listFiles() {
  try {
    const files = await readdir(folderPath, { withFileTypes: true });
    for (const file of files) {
      if (file instanceof Dirent) {
        if (file.isFile()) {
          const pathFile = path.join(folderPath, file.name);
          const fileName = path.parse(file.name).name;
          const fileExtension = path.extname(file.name).slice(1);
          fs.stat(pathFile, (err, stats) => {
            console.log(`${fileName} - ${fileExtension} - ${stats.size} bytes`);
          });
        }
      }
    }
  } catch (err) {
    console.error(err);
  }
}
listFiles();
