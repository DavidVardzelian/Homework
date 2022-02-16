/*Create a Node JS application that will recursively search all 
files in the directory given in command-line arguments and create a 
new file sorted_files.txt and write file paths and sizes in this 
file line by line sorted by file size.*/


const path = require("path");
const fs = require("fs").promises;



const argPath = process.argv;


async function readDir(Paths){
  let Dir = await fs.readdir(Paths, {withFileTypes: true})
  Dir.forEach(files => files.isDirectory() 
    ? readDir(path.resolve(Paths, files.name))
    : fs.writeFile('sorted_files.txt', `${path.resolve(Paths, files.name)} -----> fileSize\n`))
 }
 


readDir(argPath[2])

