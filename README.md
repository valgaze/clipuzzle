# clipuzzle
Tricky puzzle repo to evaluate debugging &amp; problem-solving ability


#Setup

##Setup command line tool

```bash
$ git clone https://github.com/valgaze/puzzle.git && git checkout attempt1 && npm install -g && git checkout start
```

Each administration of the challenge should be from the START branch-- interviewDay will be a CLI tool available to see a reference implementation without code

#CLI TOOL SPECIFICATION:

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

