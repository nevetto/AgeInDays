function myrb(){
    var a = prompt("enter the current year");
    var b = prompt('enter the year you were born')
    var c = "Your Age In Days Is :" + ' ' + (a - b) * 365;
    myResult.innerHTML = c;
}

function resete(){
    myResult.innerHTML = '';
}