# Wednesday, September 30th
# Greg Lindahl

##Review
[Monday's Material](https://github.com/calebatwood/Week3_Monday)
<br>
- More Functions

###Declaration Notation
In declaration notation the `function` keyword is used to start a statement. In the example
below, the statement defines the variable `square` and points it at the given function.
```javascript
function square(x) {
  return x * x;
}
```
###Control flow

```javascript
console.log("The future says:", future());

function future() {
  return "We STILL have no flying cars.";
}

// "The future says: We STILL have no flying cars."
```
This code still works even though the future() is defined below where it is used. Function declarations are not part of regular top-to-bottom control flow. Rather, they are conceptually moved to the top of their scope and can be used by all code within that scope.
This allows us the freedom to structure code in more meaningful ways, without having to define all functions before their first use.
<br>
<br>
Function declarations should not be used within conditional statements, and should only be used in the outer-most block of a function or program.

##In Class Exercise
More functions !!!!
