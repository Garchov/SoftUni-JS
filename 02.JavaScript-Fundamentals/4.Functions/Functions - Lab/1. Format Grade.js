function formatGrade(input) {
  if (input < 3) {
   return "Fail (2)";
 } else if (input < 3.5) {
   return `Poor (${input.toFixed(2)})`;
 } else if (input < 4.5) {
   return `Good (${input.toFixed(2)})`;
 } else if (input < 5.5) {
   return `Very good (${input.toFixed(2)})`;
 } else {
   return `Excellent (${input.toFixed(2)})`;
 }
}
console.log(formatGrade(3.33));
console.log(formatGrade(5.33));
console.log(formatGrade(5.49));
console.log(formatGrade(6.0));
console.log(formatGrade(2.99));