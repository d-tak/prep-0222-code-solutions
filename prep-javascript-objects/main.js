var human = {
  firstName: 'Steve',
  lastName: 'Martin',
  hobby: 'Banjo Playing'

};
console.log(human);

var fullName = human.firstName + ' ' + human.lastName;
console.log("The person's FULL name is:", fullName + '.');

human.job = 'actor';
console.log("The person's current job is:", human.job + '.');

human.previousJob = 'amigo';
console.log("The person's previous job was:", human.previousJob + '.');

console.log('The complete person object:', human);
