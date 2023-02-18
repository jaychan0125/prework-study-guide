var topics = ['HTML', 'CSS', 'Git', 'JavaScript'];

function listTopics() {  //declares a function and sets its code. will not work unless called
  for (var x = 0; x < topics.length; x++) {
    console.log(topics[x]);
  }
}

console.log("Topics we are learning:");  /* console.log(); -method used to output a (message) to the web console by adding an argument()
"console" -test envirornment devs use to check their code.  ".log()" -method will output whatever we add in the () to the console */
listTopics(); //need to call a function for it to work


var topic = prompt("Which topic are you interested in (HTML, CSS, Git, JavaScript)?"); //prompt -prompts user to input data
/*var : variables declared with 'var' are function-scoped(visible througout the entire function in which they are declared)
let : variables declared with 'let' are block-scoped(are only visible within the block in which they are declared (ie. between the {} braces)) */
topic = topic.toUpperCase(); //converts to uppercase

function selectTopic() {
  if (topic === 'HTML') {  //if statement will execute if truthy(eg, if prompt for var topic: html): then Truthy .: will execute
    console.log("Let's study HTML together!");
  } else if (topic === 'CSS') {    //(eg, falsy, will not execute)
    console.log("Let's study CSS together!");
  } else if (topic === 'GIT') {    //(eg, falsy, will not execute)
    console.log("Let's study Git together!");
  } else if (topic === 'JAVASCRIPT') {   //(eg, falsy, will not execute)
    console.log("Let's study JavaScript together!");
  } else {   //if none of other if/else if statements are truthy, else statement will execute
    console.log('Please try again!');
  }
}
selectTopic();

console.log("You should try studying:");

var randomTopic = topics[Math.floor(Math.random() * topics.length)];
console.log(randomTopic)