const printChars = function (string) {
  let charDelay = 0;
  for (let char of string) {
    setTimeout(() => {
      process.stdout.write(char);
    }, charDelay);
    charDelay += 50;
  }
  setTimeout(() => {
    //process.stdout.write('\n'); //Alternative to console.log();
    console.log();
  }, charDelay);
};
printChars('Hello there from Lighthouse Labs');