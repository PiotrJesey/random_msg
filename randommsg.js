//random_msg
console.log('hi');

//getting current time (hours)
let date = new Date();
let time = date.getHours();

let msg = ['test','test'];
let msg2 = [];

function random(arr){

    console.log(msg[(Math.floor(Math.random() * arr.length))]);
}

console.log(time);
random(msg);