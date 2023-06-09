/*
Exercise #1
Part 1
There are three people waiting for the bank. Their names, in order, are Sofia, David, and Juan. Create an array that has these three names in order.

Part 2
Two more people get added to the back of the line - Sara and Augustin. The first person in line is called to the teller. What does the queue look like?

Part 3
It turns out David was saving a spot for his friend Renata. She shows up and goes behind him in the line. One more person (Elena) shows up and goes to the end of the line. What does the queue look like?
*/
//part1
let waitbank = ['Sofia', 'David', 'Juan']
//part2
waitbank.push('Sara','Augustin')
waitbank.shift();
console.log(waitbank) //['David', 'Juan', 'Sara', 'Augustin' ]

//part3
waitbank.splice(1,0,'Renata')
waitbank.push('Elena')
console.log(waitbank)
//[ 'David', 'Renata', 'Juan', 'Sara', 'Augustin', 'Elena' ]
