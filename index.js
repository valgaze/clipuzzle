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


For reference, you can use a compiled version of this CLI tool:

$ clifun demo (shows the expected output for everything);
*/

var fullInput = process.argv;
var params = fullInput.slice(2);
var command = params.shift();
command = command ? command.toLowerCase() : undefined;
var chalk = require('chalk');
console.log('Here are the parameters', params);


var colorizer = function(input,textColor, backgroundColor) {
	if (backgroundColor) {
		return chalk[textColor][backgroundColor](input);
	} else {
		return chalk[textColor](input);
	}
};

var commandLookupHash = {
	"help":"[HELP] Please enter a command and parameters",
	"add": function() {
	var sum = 0;
	var myargs = Array.prototype.slice.call(arguments)[0];
	myargs = arguments[0];
	if (myargs.length === 0) {
		return colorizer('ERROR: No parameters provided', 'red');
	}
	for (var i = 0; i < myargs.length; i++) {
		if (Number.isNaN(parseInt(myargs[i]))) {
			return colorizer('ERROR: Sorry parameters must be numbers!','red');
		}
		sum += parseInt(myargs[i]);
	}

	if (sum === 4) {
		return colorizer(sum, "blue", "bgYellow");
	}else if (sum < 4) {
		return colorizer(sum, 'green')
	}
	return sum;
	}
};


if (!command) {
	return console.log(colorizer('ERROR: No command entered', 'red'));
} else if (commandLookupHash[command] === undefined)  {
	return console.log(`Sorry, we didn’t implement '${command}' yet!`);
} else {
	if (typeof commandLookupHash[command] === 'function') {
		return console.log(commandLookupHash[command](params))
	} else {
		return console.log(commandLookupHash[command]);
	}
}


































/*

██████╗  █████╗ ███╗   ██╗ ██████╗ ███████╗██████╗     ███████╗ ██████╗ ███╗   ██╗███████╗██╗
██╔══██╗██╔══██╗████╗  ██║██╔════╝ ██╔════╝██╔══██╗    ╚══███╔╝██╔═══██╗████╗  ██║██╔════╝██║
██║  ██║███████║██╔██╗ ██║██║  ███╗█████╗  ██████╔╝      ███╔╝ ██║   ██║██╔██╗ ██║█████╗  ██║
██║  ██║██╔══██║██║╚██╗██║██║   ██║██╔══╝  ██╔══██╗     ███╔╝  ██║   ██║██║╚██╗██║██╔══╝  ╚═╝
██████╔╝██║  ██║██║ ╚████║╚██████╔╝███████╗██║  ██║    ███████╗╚██████╔╝██║ ╚████║███████╗██╗
╚═════╝ ╚═╝  ╚═╝╚═╝  ╚═══╝ ╚═════╝ ╚══════╝╚═╝  ╚═╝    ╚══════╝ ╚═════╝ ╚═╝  ╚═══╝╚══════╝╚═╝
Can't modify out anything below this line
*/
console.log('######################################################');
console.log("******WE SHOULD NEVER SEE THIS CONSOLE.LOG******");
console.log('######################################################');
var breakyourapp = null;

breakyourapp.push('oops.');








/* this might be useful later-- feel free to use this or not


var colorizer = function(input,textColor, backgroundColor) {
	if (bg) {
		return chalk[textColor][backgroundColor](input);
	} else {
		return chalk[textColor](input);
	}
};


*/
