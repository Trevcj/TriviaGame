var time = 30;

var questions = [
 'In "The Fellowship of the Ring" what is the name of the ferry the hobbits use to escape the Black Riders?',
 'Where was the entire trilogy of the "Lord of the Rings" filmed?', 
 'Which of the following is NOT one of Gandalfs many nicknames?',
 'The members of the fellowship all attempt to cross a bridge and one does not make it across. Which "Lord Of The Rings" movie did that happen in?',
 'How does Frodo know Sam?',
 'The girls all think Im lovely, My locks are bright and blonde, And up until quite recently, Of Dwarves I was not fond. Who am I?',
 "What two animals are seen when the Hobbits are in the 'Inn of the Prancing Pony'?", 
 "Who played Samwise Gamgee?"];

var answers = [
 ["Bucklebury Ferry", "Raspberry Ferry", "Huckleberry Ferry", "Disney Cruise"],
 ["On a camera","New Zealand","Middle Earth","Peter Jackson's backyard"],
 ["The Grey Pilgrim", "Gandalf Greyhame", "The White Ranger", "Gandalf Stormcrow"], 
 ["Revenge of the Sith","Two Towers","Fellowship of the Rings","Shrek the Musical"], 
 ["Their moms met at the playground", "They met on ehobbity.com", "Sam and Frodo are brothers", "Sam is his gardner"], 
 ["Legolas","Prince Charming","The Ranger","Viserys Targaryen"], 
 ["Two horses", "A cat and a ferret", "A rat and a parrot", "Two prancing ponies"], 
 ["Sean Bean","Elijah Wood","Viggo Mortensen","Sean Astin"]];

var imageArray = [
"<img class='lotr' src='images/buckleBury.jpg'>", 
"<img class='lotr' src='images/newZealand.jpg'>", 
"<img class='lotr' src='images/whiteRanger.jpg'>", 
"<img class='lotr' src='images/fellowShip.jpg'>", 
"<img class='lotr' src='images/sam.jpg'>", 
"<img class='lotr' src='images/legolas.jpg'>", 
"<img class='lotr' src='images/catFerret.jpg'>", 
"<img class='lotr' src='images/seanAstin.jpg'>"];

var correctAnswers = [
"A. Bucklebury Ferry", 
"B. New Zealand", 
"C. The White Ranger", 
"C. Fellowship of the Ring", 
"D. Sam is his gardner", 
"A. Legolas", 
"B. A cat and a ferret", 
"D. Sean Astin"];

var questionNumber = 0;
var selecterAnswer;
var clock;
var correct = 0;
var incorrect = 0;
var unanswered = 0;
var win = 0;
var loss = 0;
var counter = 30;

$("#start").on("click", function () {
	qa();
});

function qa(){

	var layout = "<p>Time Remaining: <span class='timer'>30</span></p><p>" + questions[questionNumber] + "</p><p class='answers'>A. " + answers[questionNumber][0] + "</p><p class='answers'>B. "+answers[questionNumber][1]+"</p><p class='answers'>C. "+answers[questionNumber][2]+"</p><p class='answers'>D. "+answers[questionNumber][3]+"</p>";
	$(".questions").html(layout);
}
function wait(){

	if (questionCounter < 7) {
	questionNumber++;
	qa();
	counter = 30;
	}
}

function timerWrapper() {
	Clock = setInterval(thirtySeconds, 1000);
	function thirtySeconds() {
		if (counter === 0) {
			clearInterval(Clock);
			lossToTime();
		}
		if (counter > 0) {
			counter--;
		}
		$(".timer").html(counter);
	}
}

function lossToTime(){

	unanswered++;
	setTimeout(wait, 3000);  //  change to 4000 or other amount
}


$(".answers").on("click", function (){
	selectedAnswer = $(this).text();
	console.log(selectedAnswer);
	if(selectedAnswer === correctAnswers[questionNumber]) {
		
		clearInterval(clock);
		win++;
		$(".win").html('<p>Wins:' + win + ' </p>');
	}
	else {
		//alert("wrong answer!");
		clearInterval(clock);
		loss++;
		$(".loss").html('<p>Losses:' + loss + ' </p>');
	}
});

