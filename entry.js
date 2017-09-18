// import pageArr from './pageArr.js';

let entry = {};
require('./pageArr.js').forEach((page) => {
  entry[page] = './src/js/' + page + '.js';
});
module.exports = entry;
console.log(entry, "entry")
