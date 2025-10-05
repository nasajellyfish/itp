//*if*
// - Executes a block of code only if a specified condition is true
let midiNote = 64;
if (midiNote >= 0 && midiNote <= 127) {
	console.log("Valid MIDI note:", midiNote);
}

	// && = only true if both are true


// *if-else*



let anotherNote = 150;
if (anotherNote >= )
	
	let thirdNote = 64 ;
	if (thirdNote < 64) {
	  console.log("note smaller than 64"); 
	  } else if (thirdNote > 64 ){ 
	  console.log("note greater than 64");
	  } else if (thirdNote == 64 ){
	  console.log("MIDI note is 64");
	  } else {
	  console.log ("MIDI note is something else");
	}
	
	
//Loops
	// - allow us to repeat code multiple times

//++ = by one integer
	
	//*while* Loop

	let count = 0;
	while (count < 3) {
		console.log("Happy");
		count++;
	}
	if (count >= 3) {
		console.log("Sad");
	}
	
	
// *for* loop
	
	for (let i = 0; i < 128; i++) {
		console.log(`The next MIDI value is ${i}`); //template literal
	}
	
	// incrementing by 2
	for (let i = 0; i < 128; i += 2) {
		console.log(`The next MIDI value is ${i}`); //template literal
	}
	
	

	//finding numbers divisible by 7 and 5 vetween 1500 and 2700    **HW
	
	for (let i = 1500; i <= 2700; i++) {
		if (i % 7 === 0 && i % 5 === 0) {
			console.log(i);
		}
	}
	
	//Nested for-loop
	for (let i = 0; i <10; i++) {
		let row = ` `;
		for (let j = 0; j < 10; j++) {
			if (j >= i) {
				row += j.toString();
		
			}
		}
		console.log(row);
	}
	
//Recursion
	// a computational problem with solutions to smaller instances of the same problem
	// - functions that call themselves.
	
	//Infinite recursion
	function func() {
		console.log "Lovely!");
		func();
	}
	
	//Recursion with a stop condition
	
	function recursiveFunc(count) {
		if (count < 0) {
			return;
		}
		console.log(`${count} Lovely!`);
		recursiveFunc(count - 1);
	}
	recursiveFunc(5);