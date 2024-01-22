const { readdir, copyFile, mkdir, rm } = require('node:fs/promises');
const path = require('path');

async function copyDir() {
  const projectFolder = path.join(__dirname, 'files-copy');
  try {
    await readdir(projectFolder);
    await rm(projectFolder, { recursive: true });
    // console.log(`Del 'files-copy'`);
  } catch (err) {}

  await mkdir(projectFolder, { recursive: true });
  //   console.log(`Create 'files-copy'.`);

  return projectFolder;
}
async function listFiles() {
  try {
    await copyDir();
    const folderPath = path.join(__dirname, 'files');
    const folderPathNewFile = path.join(__dirname, 'files-copy');
    const files = await readdir(folderPath);
    files.forEach(async (file) => {
      await copyFile(
        path.join(folderPath, file),
        path.join(folderPathNewFile, file),
      );
    });
    // console.log('Files copied successfully!');
  } catch (err) {
    console.error(err);
  }
}

listFiles();
