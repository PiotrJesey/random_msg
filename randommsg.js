//random_msg
console.log('hi');

//getting current time (hours)
function Greetings(){
let date = new Date();
let time = date.getHours();
if (time < 12){
    return 'Good morning!'
} else{
    return 'Good afternoon!'
}
}

let msg = ['We cannot solve problems with the kind of thinking we employed when we came up with them. —Albert Einsteinest','Learn as if you will live forever, live like you will die tomorrow. —Mahatma Gandhi', 'Stay away from those people who try to disparage your ambitions. Small minds will always do that, but great minds will give you a feeling that you can become great too. —Mark Twain'];
let msg2 = [];

function random(arr){

    return msg[(Math.floor(Math.random() * arr.length))];
}

let RandomMessage = (name) => {
    
    console.log(  `${Greetings()}, ${name}`);
    console.log('this is message to you!'.toUpperCase());
    console.log(random(msg)+'\n'+'sd')
}


RandomMessage('Piotr')