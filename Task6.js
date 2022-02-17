
const path = require("path");
const fs = require("fs").promises;

const argPath = process.argv;

async function getDirectoryFiles(directoryPath) {
  const directoryFiles = await fs.readdir(path.resolve(directoryPath), {
    withFileTypes: true,
  });

  return Promise.all(
    directoryFiles.map(async (file) => {
      if (file.isDirectory()) {
        return await getDirectoryFiles(path.resolve(directoryPath, file.name));
      } else return path.resolve(directoryPath, file.name);
    })
  );
}


async function start(path) {
  const res = await getDirectoryFiles(path)
  fs.writeFile('sorted_files.txt',`${res.flat(Infinity).join('\n')}`)
}



start(argPath[2]);


//Kisat (((
