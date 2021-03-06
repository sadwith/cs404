var b = require('bonescript');

var state = b.LOW;

b.pinMode("USR0", b.OUTPUT);
b.pinMode("USR1", b.OUTPUT);
b.pinMode("P9_12", b.OUTPUT);//making them as output pins
b.pinMode("P9_13", b.OUTPUT);
b.pinMode("P9_16", b.INPUT);
setInterval(check, 1);

function toggle() {
    b.digitalWrite("P9_13", state);
    b.digitalWrite("USR1", state);//setting up state function and blinking up with respect to its output
    if(state == b.LOW) state = b.HIGH;
    else state = b.LOW;
    b.digitalWrite("P9_12", state);
    b.digitalWrite("USR0", state);
}

function check(){
    b.digitalRead("P9_16",checkButton);//reading check button
}

function checkButton(x) {
  if(x.value == 1){
    b.digitalWrite("P9_12", b.HIGH);//writing output with respect to check buttons output
    b.digitalWrite("P9_13", b.LOW);
  }
  else {
    b.digitalWrite("P9_12", b.LOW);
    b.digitalWrite("P9_13", b.HIGH);
  }
}
