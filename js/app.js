function Addition(){
    var x=parseFloat(document.getElementById(`number1`).value);
    var y=parseFloat(document.getElementById(`number2`).value);

    var z=x+y;
    document.getElementById(`result`).innerHTML=z;
    console.log(z);
}

function Subtraction(){
    var x=document.getElementById(`number1`).value;
    var y=document.getElementById(`number2`).value;

    var z=`${x-y}`;
    document.getElementById(`result`).innerHTML=z;
    console.log(z);
}
function Multiplication(){
    var x=document.getElementById(`number1`).value;
    var y=document.getElementById(`number2`).value;

    var z=`${x*y}`;
    document.getElementById(`result`).innerHTML=z;
    console.log(z);
}
function Division(){
    var x=document.getElementById(`number1`).value;
    var y=document.getElementById(`number2`).value;

    var z=`${x/y}`;
    document.getElementById(`result`).innerHTML=z;
    console.log(z);
}

/*
var today = new Date();
var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
var dateTime = date+' '+time;

if (1<= time <= "10") {
    alert("Have a good morning!");
    document.body.style.backgroundColor = "yellow";
} 
else if (11<= time <= "20")  {
    alert("Have a good day!");
    document.body.style.backgroundColor = "blue";
} 
else if (21<= time) {
    alert("Have a good night!");
    document.body.style.backgroundColor = "dark";
}
 
document.getElementById(`time`).innerHTML=dateTime;
console.log(dateTime)
*/
