function recursiveCount(num = 0) {
  if (num === 10) {
    return;
  }
  console.log(num);
  recursiveCount(num + 1);
}

if (require.main === module) {
  recursiveCount();
}

module.exports = recursiveCount;

// OPTIONAL
// Please add your pseudocode to this file
// And a written explanation of your solution
/*
base case: if count equals 10, return
print count each time
call recursiveCount(count+1)
*/
