
var myarray = [ "This is my first sentence.", "This is my second sentence.", "This is my third sentence." ];
var keyIsPressed = 0;


window.onkeypress = function (e) {
var keyCode = (e.keyCode || e.which);

	if (keyCode === 57) {   // if you press the "9" key, run the "if" statement below:

		if (keyIsPressed === 0) {           //  this condition is true: keyIsPressed equals 0
			keyIsPressed++;                 //  if the condition is true, add +1 to keyIsPressed... keyIsPressed now equals 1.
			document.getElementById("writetexthere").innerHTML = myarray[0];   //  if "9" is pressed once, show the first sentence in the array

		} else if (keyIsPressed === 1) {    //  this condition is true: keyIsPressed equals 1
			keyIsPressed++;                 //  if the condition is true, add +1 to keyIsPressed... keyIsPressed now equals 2.
			e.preventDefault();             // this will "clear" the first sentence
			document.getElementById("writetexthere").innerHTML = myarray[1];   // if "9" is pressed twice, show the second sentence in the array

		} else if (keyIsPressed === 2) {   // this condition is true: keyIsPressed equals 2
			keyIsPressed++;                //  if the condition is true, add +1 to keyIsPressed... keyIsPressed now equals 3.
			e.preventDefault();            // this will "clear" the second sentence
			document.getElementById("writetexthere").innerHTML = myarray[2];    // if "9" is pressed three times, show the third sentence in the array

		} else {
			return;
		}
 	}
};


























