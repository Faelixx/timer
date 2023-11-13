'use strict';

// First we need to assign the process to an array
const proArgs = process.argv;

// Slice out all the unneccessary stuff
// We assign timers to the input that will be received from the commmand prompt.

const timers = proArgs.slice(2);

// Check if the timers array is empty.
if (timers.length === 0) {
  console.log("Please input positive numbers.");
}

for (const timer of timers) {
  if (parseInt(timer) > 0) {
    setTimeout(() => {
      process.stdout.write(`\x07 *BUZZ BUZZ*`);
    }, timer * 1000);
    // Check if array has positive values or has actual numbers.
  } else if (timer < 0 || typeof timer === 'string') {
    console.log('Please input positive numbers.');
    break;
  }
}