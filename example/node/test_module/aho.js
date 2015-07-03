var fsy = require('./test_module');
exports.aho = function(){
  console.log(fsy() + ' aho');
}

console.log(module);
console.log(exports);


