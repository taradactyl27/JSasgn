function fibonacci(n) {
    var x = 1;
    var y = 1;
    while(n > 2) {
	var z = y;
	y += x;
	x = z;
	n -= 1;
    }
    return y;
}

function gcd(x,y){
    if (! y){
	return x;
    }
    return gcd(y, x % y);
}
var list = ['Alex','Xavier','John','Doe','Yeet'];
function randomStudent(){
    index = Math.floor(Math.random() * list.length);
    return list[index];

}
