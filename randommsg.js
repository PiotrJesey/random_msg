//random_msg
console.log('hi');
let msg = ['test','test'];
let msg2 = [];

function random(arr){

    console.log(msg[(Math.floor(Math.random() * arr.length))]);
}


random(msg);