/*
CLI TOOL SPECIFICATION:

USAGE: $ node index.js [COMMAND] (parameters)

# Never reach the bottom area

$ node index.js add 5 6 7 8 #returns 26

$ node index.js xxyyyzzz #returns ”Sorry, we didn’t implement 'xxyyyzzz' yet!"

$ node index.js help # returns "Please enter a command and parameters"

$ node index.js add 5 6 7 string 8 #returns "ERROR: Sorry parameters must be numbers!"

$ node index.js add #returns "ERROR: No parameters provided"

#If the result is less than 4 make the text cyan, 
#If the result is less greater than 5 make it green,
#If the sum is exactly 4 make it yellow background, blue text
#If there's some type of error or problem give it red text

*/

var fullInput;
var params;
var command;
command = command.toLowerCase();

console.log('Here are the parameters', params);


var commandLookupHash = {
	"help":"Please enter a command and parameters",
	"add": function() {
	var sum = 0;
	for (var i = 0; i < arguments.lenght; i++){
		sum += arguments[i];
	}
	return sum;
	}
};


if (commandLookupHash[command] === undefined) {
	console.log('Please enter a command and parameters');
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
console.log('######################################################');
console.log("******WE SHOULD NEVER SEE THIS CONSOLE.LOG******");
console.log('######################################################');
var breakyourapp = null;

breakyourapp.push('oops.');
