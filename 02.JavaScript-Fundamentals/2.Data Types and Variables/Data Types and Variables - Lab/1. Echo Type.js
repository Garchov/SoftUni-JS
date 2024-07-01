function test(parameter) {
  let type = typeof parameter;
  console.log(type);

  if (type == "string" || type == "number") {
    console.log(parameter);
  } else {
    console.log("Parameter is not suitable for printing");
  }
}
//print data type
// print value, if type is string or number
// otherwise print error message
