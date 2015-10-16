var b = require('bonescript');

var state = b.LOW;

b.pinMode("USR0", b.OUTPUT);//making them as output
b.pinMode("USR1", b.OUTPUT);
b.pinMode("P9_12", b.OUTPUT);
b.pinMode("P9_13", b.OUTPUT);

setInterval(toggle, 1000);//setting up time interval

function toggle() {
    b.digitalWrite("P9_13", state);//glowing up the leds with respect to output of state function
    b.digitalWrite("USR1", state);
    if(state == b.LOW) state = b.HIGH;
    else state = b.LOW;
    b.digitalWrite("P9_12", state);
    b.digitalWrite("USR0", state);
}
