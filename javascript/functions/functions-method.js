function creep(){ return this; } //context functions window

var sneak = creep; //context window
console.log( sneak() );

var ninja1 ={
	skulk: creep
}; // context ninja1
console.log( ninja1.skulk() );

var ninja2 ={
	skulk: creep
}; // context ninja2
console.log( ninja2.skulk() );


