/*
CLI TOOL SPECIFICATION:

USAGE: $ node index.js [COMMAND] (parameters)
NOTE: Paremeters should only be positive integers

# Never reach the bottom area

$ node index.js add 5 6 7 8 #returns 26

$ node index.js #returns "ERROR: No command entered"

$ node index.js xxyyyzzz #returns ”Sorry, we didn’t implement 'xxyyyzzz' yet!"

$ node index.js help #returns "Please enter a command and parameters"

$ node index.js add 5 6 7 string 8 #returns "ERROR: Sorry parameters must be numbers!"

$ node index.js add #returns "ERROR: No parameters provided"

~~Color~~
#If the result is less than 4 make the text green
#If the result is exactly 4 make it yellow background with blue text
#If the result is greater than 4, don't style it
#If there's some type of error or problem give it red text

For reference, you can use a compiled version of this CLI tool available globally as interviewDay to see the output

$ interviewDay add 2 2

*/



var fullInput;
var params;
var command;
command = command.toLowerCase();

console.log('Here are the parameters', params);


var commandLookupHash = {
	"help":"[HELP] Please enter a command and parameters",
	"add": function() {
	//Something is a little weird here-- maybe there are tyspos?
	//Where do we put the parameters? What are the parameters?
	var sum = 0;
	for (var i = 0; i < arguments.lenght; i++){
		sum += arguments[i];
	}
	return sum;
	}
};


if (!command) {
	console.log('ERROR: No command entered');
} else if (commandLookupHash[command] === undefined)  {
	console.log(`Sorry, we didn’t implement '${command}' yet!`);
} else {
	//??
}




































/*

██████╗  █████╗ ███╗   ██╗ ██████╗ ███████╗██████╗     ███████╗ ██████╗ ███╗   ██╗███████╗██╗
██╔══██╗██╔══██╗████╗  ██║██╔════╝ ██╔════╝██╔══██╗    ╚══███╔╝██╔═══██╗████╗  ██║██╔════╝██║
██║  ██║███████║██╔██╗ ██║██║  ███╗█████╗  ██████╔╝      ███╔╝ ██║   ██║██╔██╗ ██║█████╗  ██║
██║  ██║██╔══██║██║╚██╗██║██║   ██║██╔══╝  ██╔══██╗     ███╔╝  ██║   ██║██║╚██╗██║██╔══╝  ╚═╝
██████╔╝██║  ██║██║ ╚████║╚██████╔╝███████╗██║  ██║    ███████╗╚██████╔╝██║ ╚████║███████╗██╗
╚═════╝ ╚═╝  ╚═╝╚═╝  ╚═══╝ ╚═════╝ ╚══════╝╚═╝  ╚═╝    ╚══════╝ ╚═════╝ ╚═╝  ╚═══╝╚══════╝╚═╝
Don't delete/modify anything below this line
*/
console.log('######################################################');
console.log("******WE SHOULD NEVER SEE THIS CONSOLE.LOG******");
console.log('######################################################');
var breakyourapp = null;

breakyourapp.push('oops.');





























/* this might be useful later-- feel free to use this or not


var colorizer = function(input, textColor, backgroundColor) {
	if (backgroundColor) {
		return chalk[textColor][backgroundColor](input);
	} else {
		return chalk[textColor](input);
	}
};


*/
