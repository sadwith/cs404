var b = require('bonescript');
var s;
b.pinMode('P9_14',b.ANALOG_OUTPUT);
// b.pinMode('P9_38',b.ANALOG_INPUT);
b.analogWrite('P9_14',"0");
setInterval(bright , 1000);//set brightness interval

function printStatus(x) {
    console.log('x.value = ' + x.value);//printing the values
    console.log('x.err = ' + x.err);
        b.analogWrite('P9_14', x.value)
}

function bright() {
    b.analogRead('P9_38',printStatus);//reading the brightness
}                    

