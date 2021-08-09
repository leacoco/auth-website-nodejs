const func = function testFunc(a, b, c) {
  console.log(arguments);
  for (var key in  arguments) {
    console.log(arguments[key])
    console.log(key);
  };
}


func("leadel", "kolo", 43);
