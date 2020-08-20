//didn't need script
console.log("hello");

function quiz(){
	var score = 0;
	var num;
	//var num2;
	var question;
	var answer;
	var quiz_questions = [
	  'How many moons does Earth have?',
	  'How many moons does Saturn have?',
	  'How many moons does Venus have?']; //missing square bracket

	var quiz_answers=[1, 31, 1];

	//get total number of questions
	var totalQuestion=quiz_questions.length; //how many ?s

	//generate random number for question
	num=Math.floor(Math.random()*3);//random number between 0-2

	for(count=0 ; count<totalQuestion ; count++){
		console.log("for loop");
		question=quiz_questions[num];
		answer=prompt(question);
		if (answer==quiz_answers[num]){
			score++;
			alert("Correct!");
			//console.log(1);
			//num2++;
		}
		else if (answer != quiz_answers[num]) {
			alert("Wrong");

		}
		//insert else for cancel here
		num++;
		if (num==totalQuestion){
			num=0;
		}
}

document.write('<p>You got ' + score + ' out of ' + totalQuestion + ' questions correct.</p>');
}
//random <
