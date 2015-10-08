var b = require('bonescript');

var state = b.LOW;

b.pinMode("USR0", b.OUTPUT);
b.pinMode("USR1", b.OUTPUT);//making them output
b.pinMode("P9_12", b.OUTPUT);
b.pinMode("P9_13", b.OUTPUT);
//b.pinMode("P9_14", b.INPUT);
setInterval(toggle, 1000);

function toggle() {
    b.digitalWrite("P9_13", state);
    b.digitalWrite("USR1", state);
    if(state == b.LOW) state = b.HIGH;//running a loop making it on and off with time interval 1000
    else state = b.LOW;
    b.digitalWrite("P9_12", state);
    b.digitalWrite("USR0", state);
}
