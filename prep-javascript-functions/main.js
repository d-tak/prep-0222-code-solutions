function addTwoNumbers(num1, num2) {
  return num1 + num2;
}
var sum = addTwoNumbers(2, 2);
console.log('addTwoNumbers', sum);

function convertHoursToMinutes(hours) {
  return hours * 60;
}
var product = convertHoursToMinutes(2);
console.log('convertHoursToMinutes', product);

function getGreeting(name) {
  return 'Hello' + ' ' + name + '!';
}
console.log('getGreeting', getGreeting('world'));

function addAndMultiplyBy5(num1, num2) {
  return addTwoNumbers(num1, num2) * 5;
}
console.log('addAndMultiplyBy5', addAndMultiplyBy5(10, 5));

function multiplyAndDivideBy5(num1, num2) {
  return (num1 * num2) / 5;
}
console.log('multiplyAndDivideBy5', multiplyAndDivideBy5(35, 10));

function subtractTwoNumbers(num1, num2) {
  return num1 - num2;
}
console.log('subtractTwoNumbers', subtractTwoNumbers(22, 7));

function getCircleCircumference(radius) {
  return 2 * Math.PI * radius;
}
console.log('getCircleCircumference', getCircleCircumference(5));

function getFullName(firstName, lastName) {
  return (firstName + ' ' + lastName);
}
console.log('getFullName', getFullName('Juan', 'Ramirez'));

function cube(number) {
  return (Math.pow(number, 3));
}
console.log('cube', cube(5));
