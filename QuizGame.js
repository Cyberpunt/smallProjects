
// making code privite with wrapping with an IIFE
(function() {
 
//building question function constructor 

function Question(questions,answers,correctAnswer) {
    this.question = questions
    this.answers =answers
    this.correctAnswer = correctAnswer;
 
        }
        
// attatching method to prototype 
Question.prototype.displayQuestion= function() {
    console.log(this.question);
    
    for (var i = 0; i < this.answers.length; i++) {
        console.log(i + ': ' + this.answers[i]);
    }
}

Question.prototype.checkAnswer = 
    function(ans) {
    if (ans === this.correctAnswer) {
        console.log('Correct')
    } else {
        console.log('Wrong answer')
     }
    }

//setting questions and answers

var q1 = new Question('What color is the sky?',
                      ['Blue','Green','Yellow'], 0 );
                    

var q2 = new Question('Is the earth round?',
                        ['Yes', 'No',], 0);
    
var q3= new Question('Is the earth flat?',
                             ['Yes', 'No',], 0);  

var question = [q1, q2, q3];

// select random question 
var n = Math.floor(Math.random() * question.length);

question[n].displayQuestion();

//set up prompt window for user input
var answer = parseInt(prompt('Please select the correct answer.'));
                

question[n].checkAnswer(answer);

 })();                 

