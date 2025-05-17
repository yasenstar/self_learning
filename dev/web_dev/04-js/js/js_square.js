var message, result;
result = square(3);
message = "the square of 3 is " + result;
alert(message);

function square(x) {
    var sq;
    sq = x * x;
    return sq;
}
alert("the square of 4 is " + square(4));