/*
CLI TOOL SPECIFICATION
# Never reach the bottom area

$ node index.js add 5 6 7 8 #returns 26

$ node index.js subtract 5 6 7 8 #returns “Sorry, we didn’t implement 'subtract' yet!”

$ node index.js aaabb #returns ”Sorry, we didn’t implement ‘aaabb’ yet!’

$ node index.js help # returns "Please enter a command and parameters"

$ node index.js add 5 6 7 anyotherstring 8 #returns sorry parameters must be numbers

#If the result is less than 4 make the text red, 
#If the result is less greater than 5 make it green,
#If the sum is exactly 4 make it yellow background, blue text


$ node index.js add 5 6 7 anyotherstring 8 #returns Sorry no strings except LOL, lol!!
*/

var fullInput = process.argv;

var params = fullInput.slice(2);
var command = params.shift();
command = typeof command === 'string' ? command.toLowerCase() : null;

console.log(params);


var commandLookup = {
	"help":"Please enter a command and parameters",
	"add": function() {
	var sum = 0;
	for (var i = 0; i < arguments.length; i++){
		sum += arguments[i];
	}
	return sum;
	}
};


if (commandLookup[command] === undefined) {
	return console.log('Please enter a command and parameters');
} else {

}


































/*

██████╗  █████╗ ███╗   ██╗ ██████╗ ███████╗██████╗     ███████╗ ██████╗ ███╗   ██╗███████╗██╗
██╔══██╗██╔══██╗████╗  ██║██╔════╝ ██╔════╝██╔══██╗    ╚══███╔╝██╔═══██╗████╗  ██║██╔════╝██║
██║  ██║███████║██╔██╗ ██║██║  ███╗█████╗  ██████╔╝      ███╔╝ ██║   ██║██╔██╗ ██║█████╗  ██║
██║  ██║██╔══██║██║╚██╗██║██║   ██║██╔══╝  ██╔══██╗     ███╔╝  ██║   ██║██║╚██╗██║██╔══╝  ╚═╝
██████╔╝██║  ██║██║ ╚████║╚██████╔╝███████╗██║  ██║    ███████╗╚██████╔╝██║ ╚████║███████╗██╗
╚═════╝ ╚═╝  ╚═╝╚═╝  ╚═══╝ ╚═════╝ ╚══════╝╚═╝  ╚═╝    ╚══════╝ ╚═════╝ ╚═╝  ╚═══╝╚══════╝╚═╝
Can't delete anything below this line
*/
console.log("******WE SHOULD NEVER SEE THIS CONSOLE.LOG******");

var breakyourapp = null;

null.push('oops.');
