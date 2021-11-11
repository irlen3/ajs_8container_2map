import validateUsername from './validationName';

// task 1
console.log(validateUsername('Петя'));
console.log(validateUsername('Peter'));
console.log(validateUsername('Pet+er'));
console.log(validateUsername('fna97545kg'));
console.log(validateUsername('fna%97kg'));
console.log(validateUsername('4fna97kg'));
