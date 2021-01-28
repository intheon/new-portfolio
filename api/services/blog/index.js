const fs = require("fs");
const path = require('path');
const util = require("util");

const getDir = util.promisify(fs.readdir);
const readFile = util.promisify(fs.readFile);

async function getBlogs(){

  console.log("service: getBlogs");
  const base = path.resolve();
  const dataPath = `${base}/data/blogs`;
  console.log(dataPath);
  let promises = [];

  // get all our files in the /data dir
  const files =  await getDir(dataPath);

  console.log(files);
  // create an array of promises
  files.forEach((file) => {
    promises.push(readFile(`${dataPath}/${file}`, "utf-8"));
  });

  // resolve them and send back the contents
  return await Promise.all(promises);

}

module.exports = {
  getBlogs
};
