// global variables
outside = "outside";
global = "global";
var same = "outside";

function testfunction()
{
    // inside function
    global = "local";    // mistakenly modified global variable

    var inside = "inside";    // local variable
    var local;
    var same = "inside";

    alert(inside);    // print inside
    alert(outside);    // print outside
    alert(local);    // print "" because it was not initiatized
    alert(same);    // print inside
    alert(global);    // print local because we modified it
}

// running testfunction()
testfunction();

// after running testfunction()
alert(outside);    // outside
alert(global);     // global because we had overwritten it
alert(same);       // print outside