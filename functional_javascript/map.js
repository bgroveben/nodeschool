/*
FUNCTIONAL JAVASCRIPT IS GOOD
───────────────────────────────
 Basic: Map
 Exercise 3 of 18


# Task

Convert the following code from a for-loop to Array#map:

    function doubleAll(numbers) {
      var result = []
      for (var i = 0; i < numbers.length; i++) {
        result.push(numbers[i] * 2)
      }
      return result
    }
    
    module.exports = doubleAll

## Arguments

  * numbers: An Array of 0 to 20 Integers between 0 and 9

## Conditions

  * Your solution should use Array.prototype.map()
  * Do not use any for/while loops or Array.prototype.forEach.
  * Do not create any unecessary functions e.g. helpers.

## Resources

  * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map

var numbers = [1, 4, 9];
var doubles = numbers.map(function(num) {
  return num * 2;
});

var map = Array.prototype.map;
var a = map.call('Hello World', function(x) { return x.charCodeAt(0); });
// a now equals [72, 101, 108, 108, 111, 32, 87, 111, 114, 108, 100]

var arrNum = [1,2,3,4,5],
    r = document.getElementById('result'),
    
    double = function(n){
        return n * 2;        
    },
    
    foo = arrNum.map( double ); 

r.innerHTML = foo;

## Boilerplate

    function doubleAll(numbers) {
      // SOLUTION GOES HERE
    }
    
    module.exports = doubleAll


 » To print these instructions again, run: functional-javascript print
 » To execute your program in a test environment, run: functional-javascript run program.js
 » To verify your program, run: functional-javascript verify program.js
 » For help run: functional-javascript help
*/

/*
function doubleAll(numbers) {
    return numbers * 2
}
result = numbers.map(doubleAll);
module.exports = doubleAll
#FAIL
*/

/*
function doubleAll(numbers) {
    numbers.map(function() {
        return numbers * 2;
    });
}
module.exports = doubleAll
#FAIL
*/

/*
function doubleAll(numbers) {
    Array.prototype.map.call(numbers, function(i) { return i * 2; });
}
module.exports = doubleAll
#FAIL
*/ 


function doubleAll(numbers) {
    var doubles = numbers.map(function(num) {
        return num * 2;
    });
    return doubles;
}
module.exports = doubleAll

/*
# PASS

Your solution to Basic: Map passed!

Here's the official solution in case you want to compare notes:

────────────────────────────────────────────────────────────────────────────────
    module.exports = function doubleAll(numbers) {
      return numbers.map(function double(num) {
        return num * 2
      })
    }

────────────────────────────────────────────────────────────────────────────────
*/

function doubleAll(numbers) {
	return numbers.map(function double(num) {
		return num * 2;
	})
}
module.exports = doubleAll