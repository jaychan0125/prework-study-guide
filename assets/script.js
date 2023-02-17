//console.log(); -method used to output a (message) to the web console by adding an argument()
//"console" -test envirornment devs use to heck their code.  ".log()" -method will output whatever we add in the () to the console 

// var topic = "HTML";
var topic = prompt("What are you learning?"); //prompt -prompts user to input data
/*var : variables declared with 'var' are function-scoped(visible througout the entire function in which they are declared)
let : variables declared with 'let' are block-scoped(are only visible within the block in which they are declared (ie. between the {} braces)) */
topic = topic.toUpperCase(); //converts to uppercase

if (topic === 'HTML') {     //if statement will execute if truthy. Truthy .:will execute
  console.log("Let's study HTML!");
} else if (topic === 'CSS') {      //falsy, will not execute
  console.log("Let's study CSS!");
} else if (topic === 'GIT') {      //falsy, will not execute
  console.log("Let's study Git!");
} else if (topic === 'JAVASCRIPT') {      //falsy, will not execute
  console.log("Let's study JavaScript!");
} else {        //if none of other if/else if statements are truthy, else statement will execute
  console.log('Please try again!');
}

/*For Loop:
var shapes = ["triangle", "square", "pentagon", "circle"];
//console.log(shapes[0]) //zero-indexed and sequential. first data is 0, second is 1, etc.  pull with []
for (var x = 0; x < shapes.length; x++) {  //"x++" shortform of "x+1"
    console.log(shapes[x]);
}
*/
/*When the computer hits the for loop, it will start with x being 0. 
Since x is less than the length of the shapes, which is 4, it will run the code inside the loop. 
Therefore, it will log the value of shapes[0] in the console, which is "triangle". 
Then it will increment x, so now x is 1. 
Then the loop starts over again.
This is repeated until x is 4, which is the length of the array. It will then stop the loop.*/

console.log("Topics we are studying:");

var topics = ["HTML", "CSS", "Git", "JavaScript"]; 

for (var x = 0; x < topics.length; x++) {
    console.log(topics[x]);
}


