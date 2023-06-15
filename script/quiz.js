let actQuestion = 0;
let tempPoint;
let totalPoints = 0;
let actMusicQuiz = false;

//Questions True False
let questionsTF = [
    { question: "What is the name of the kingdom of Anna and Elsa?", rightAnswer: "Arendelle", wrongAnswer1: "Polynesien", wrongAnswer2: "Atlantica", wrongAnswer3: "Antarctica", src: "quiz1/arendelle2.jpg" },
    { question: "Why is Elsa wearing gloves in the first part?", rightAnswer: "To keep their powers under wraps", wrongAnswer1: "to look beautiful", wrongAnswer2: "To keep her hand warm", wrongAnswer3: "she doesn't want to show them", src: "quiz1/gloves.jpg" },
    { question: "How did Anna and Elsa's parents die?", rightAnswer: "In a shipwreck", wrongAnswer1: "Because of age", wrongAnswer2: "Because of an infectious", wrongAnswer3: "Both had a heartattack", src: "quiz1/funeral.jpg" },
    { question: "What were the parents' names?", rightAnswer: "Iduna and Agnarr", wrongAnswer1: "Anna and Hans", wrongAnswer2: "Elsa and Sven", wrongAnswer3: "Anna and Duke", src: "quiz1/parents.jpg" },
    { question: "How many brothers does Hans have?", rightAnswer: "12", wrongAnswer1: "5", wrongAnswer2: "2", wrongAnswer3: "10", src: "quiz1/hans.jpg" },
    { question: "What happens when Elsa has a cold and sneezes?", rightAnswer: "A little snowman is born", wrongAnswer1: "There is a thunderstorm", wrongAnswer2: "She sneezes snowflakes", wrongAnswer3: "There is a snowstorm", src: "quiz1/sneezing.jpg" },
    { question: "What symbol is on the kingdom flag?", rightAnswer: "A flower", wrongAnswer1: "A star", wrongAnswer2: "A circle", wrongAnswer3: "A butterfly", src: "quiz1/arendelle.jpg" },
    { question: "What did Anna and Elsa's grandfather build in the magic forest a long time ago?", rightAnswer: "A dam", wrongAnswer1: "A castle", wrongAnswer2: "A villa", wrongAnswer3: "A cottage", src: "quiz1/forest.jpg" },
    { question: "Who or what is Gale?", rightAnswer: "A funny wind", wrongAnswer1: "A warm fire", wrongAnswer2: "A waterfall", wrongAnswer3: "An animal", src: "quiz1/g.jpg" },
    { question: "What could save frozen Anna?", rightAnswer: "A kiss of true love.", wrongAnswer1: "A warm fire", wrongAnswer2: "A hug", wrongAnswer3: "Something to eat", src: "quiz1/frozenAnna,jpg.jpg" }
]
let questionsMusic = [
    { question: "DoYouWannaBuildASnowman.mp3", rightAnswer: "Do You Wanna Build A Snowman", wrongAnswer1: "Frozen Heart", wrongAnswer2: "For The First Time In Forever", wrongAnswer3: "In Summer", src: "quiz2/DoYouWannaBuildASnowman.jpg" },
    { question: "WhenIAmOlder.mp3", rightAnswer: "When I Am Older", wrongAnswer1: "Do You Wanna Build A Snowman", wrongAnswer2: "Fixer Upper", wrongAnswer3: "Reindeers Are Better Than People", src: "quiz2/WhenIAmOlder.jpg" },
    { question: "FixerUpper.mp3", rightAnswer: "Fixer Upper", wrongAnswer1: "Show Yourself", wrongAnswer2: "Lost In The Woods", wrongAnswer3: "The Next Right Thing", src: "quiz2/FixerUpper.jpg" },
    { question: "ReindeersAreBetterThanPeople.mp3", rightAnswer: "Reindeers Are Better Than People", wrongAnswer1: "When I Am Older", wrongAnswer2: "Some Things Never Change", wrongAnswer3: "Into The Unknown", src: "quiz2/ReindeersAreBetterThanPeople2.jpg" },
    { question: "ForTheFirstTimeInForever.mp3", rightAnswer: "For The First Time In Forever", wrongAnswer1: "Reindeers Are Better Than People", wrongAnswer2: "The Next Right Thing", wrongAnswer3: "All Is Found", src: "quiz2/ForTheFirstTimeInForever.jpg" },
    { question: "LoveIsAnOpenDoor.mp3", rightAnswer: "Love Is An Open Door", wrongAnswer1: "Into The Unknown", wrongAnswer2: "The Next Right Thing", wrongAnswer3: "Some Things Never Change", src: "quiz2/LoveIsAnOpenDoor.jpg" },
    { question: "InSummer.mp3", rightAnswer: "In Summer", wrongAnswer1: "Let It Go", wrongAnswer2: "For The First Time In Forever", wrongAnswer3: "Frozen Heart", src: "quiz2/InSummer.jpg" },
    { question: "LostInTheWoods.mp3", rightAnswer: "Lost In TheWoods", wrongAnswer1: "When I Am Older", wrongAnswer2: "Let It Go", wrongAnswer3: "Do You Wanna Build A Snowman", src: "quiz2/LostInTheWoods.jpg" },
    { question: "IntoTheUnknown.mp3", rightAnswer: "Into The Unknown", wrongAnswer1: "In Summer", wrongAnswer2: "Reindeers Are Better Than People", wrongAnswer3: "Frozen Heart", src: "quiz2/IntoTheUnknown.jpg" },
    { question: "LetItGo.mp3", rightAnswer: "Let It Go", wrongAnswer1: "Show Yourself", wrongAnswer2: "Love Is An Open Door", wrongAnswer3: "All Is Found", src: "quiz2/LetItGo.jpg" }
]
let questionsMissingPerson = [
    { question: "Who is missing?", rightAnswer: "Olaf", wrongAnswer1: "Sven", wrongAnswer2: "Kristoff", wrongAnswer3: "Hans", src: "quiz4/pic1.jpg" },
    { question: "Who is missing?", rightAnswer: "Kristoff", wrongAnswer1: "Sven", wrongAnswer2: "Duke", wrongAnswer3: "Hans", src: "quiz4/pic2.jpg" },
    { question: "Who is missing?", rightAnswer: "Anna", wrongAnswer1: "Elsa", wrongAnswer2: "Belle", wrongAnswer3: "Jasmin", src: "quiz4/pic3.jpg" },
    { question: "Who is missing?", rightAnswer: "Hans", wrongAnswer1: "Sven", wrongAnswer2: "Kristoff", wrongAnswer3: "Anna", src: "quiz4/pic4.jpg" },
    { question: "Who is missing?", rightAnswer: "Anna", wrongAnswer1: "Elsa", wrongAnswer2: "Cinderella", wrongAnswer3: "Ariel", src: "quiz4/pic5.jpg" },
    { question: "Who is missing?", rightAnswer: "Oaken", wrongAnswer1: "Olaf", wrongAnswer2: "Kristoff", wrongAnswer3: "Duke", src: "quiz4/pic6.jpg" },
    { question: "Who is missing?", rightAnswer: "Elsa", wrongAnswer1: "Anna", wrongAnswer2: "Vaiana", wrongAnswer3: "Tinker Bell", src: "quiz4/pic7.jpg" },
    { question: "Who is missing?", rightAnswer: "Bruni", wrongAnswer1: "Sven", wrongAnswer2: "Olaf", wrongAnswer3: "Kristoff", src: "quiz4/pic8.jpg" },
    { question: "Who is missing?", rightAnswer: "Sven", wrongAnswer1: "Olaf", wrongAnswer2: "Duke", wrongAnswer3: "Kristoff", src: "quiz4/pic9.jpg" },
    { question: "Who is missing?", rightAnswer: "Duke", wrongAnswer1: "Kristoff", wrongAnswer2: "Hans", wrongAnswer3: "Sven", src: "quiz4/pic10.jpg" }
]

function randomIntFromInterval(min, max) { // min and max included 
    return Math.floor(Math.random() * (max - min + 1) + min)
}

let actQuiz;
let outpActQuiz = "Quiz";
let description = ""


function movieQuiz(quiz) {
    let ergbox = document.getElementById('erg')
    if (quiz === 'questionsTF') {
        actQuiz = questionsTF;
        outpActQuiz = "Movie Quiz"
        description = "The Frozen quiz is a series of multiple-choice questions designed to test your knowledge of the popular Disney movie. You will be presented with questions about the characters, storyline, and soundtrack of the film. To answer each question, read the options and tick the one that you think is the correct answer. There is no time limit, so take your time to think about each question before answering. Once you have completed the quiz, you will receive a score that reflects how well you did. This quiz is a fun way to challenge yourself and see how much you remember about the world of Frozen!"
    } else if (quiz === 'musicQu') {
        actQuiz = questionsMusic;
        actMusicQuiz = true;
        outpActQuiz = "Song Quiz"
        description = "The Frozen song quiz is a fun way to test your knowledge of the popular Disney movie soundtrack. In this quiz, you will be played a few seconds of a song from the movie, and then you will be presented with multiple-choice options for what the song is. Listen carefully to the music and then select the answer that you believe corresponds to the correct song title. The questions will cover a range of songs from the movie, so make sure to study up on your Frozen soundtrack knowledge beforehand! This quiz is a fun and interactive way to see how well you know the music of Frozen."
    } else if (quiz === 'whoIsMissing') {
        actQuiz = questionsMissingPerson;
        outpActQuiz = "Who is missing?"
        description = "The Find the Missing Character Frozen quiz is a fun visual puzzle that challenges you to identify which character is missing from a given scene. To play this quiz, you should first study all of the characters on the character page to become familiar with their appearances. Then, you will be presented with a picture from the movie that is missing one of the characters. You will need to examine the picture closely and choose the correct character from a list of options provided. This quiz is a great way to test your observation skills and see how well you know the characters of Frozen!"
    }
    //description = "The "Anna or Elsa" Frozen quiz is a personality quiz designed to determine whether your personality traits align more with Anna or Elsa. In this quiz, you will be presented with a series of statements that describe various personality traits or preferences. You will need to rate each statement on a scale from 1 to 10, with 1 indicating that the statement is not true for you and 10 indicating that the statement is very true for you. Based on your responses, the quiz will calculate a score that reflects whether you are more like Anna or Elsa. This quiz is a fun way to explore your own personality and see how you match up with the two beloved Frozen characters"
    ergbox.innerHTML = `<div id="questionBox">
                        <h2>${outpActQuiz}</h2>
                        <p id="desc">${description}</p>
                        <div id="buttonAlignStart">
                            <button class="button_next" onclick="question()"> Start
                                <div class="icon">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
                                        <path fill="none" d="M0 0h24v24H0z"></path>
                                        <path fill="currentColor"
                                            d="M16.172 11l-5.364-5.364 1.414-1.414L20 12l-7.778 7.778-1.414-1.414L16.172 13H4v-2z">
                                        </path>
                                    </svg>
                                </div>
                            </button>
                        </div></div>
                    `
}

function question() {
    if (actQuiz.length > actQuestion) {

        let rndInt = randomIntFromInterval(1, 4)
        randomOutput(rndInt);
        actQuestion++;
    } else {
        printResult();
    }

}

function proofeResult() {
    let actValue = 0
    if (document.querySelectorAll('input[name="example-radio"]:checked').length != 0) {
        actValue = document.querySelector('input[name="example-radio"]:checked').value;
        actValue = parseInt(actValue)
        if (actValue !== null) {
            totalPoints += actValue;
            console.log("total p: " + totalPoints)
            question()
        }
    }
    /** 
    if(actValue === null){
        console.log('err')
    } else {
        console.log("temp p: " + actValue)
        question();
    }*/

}

function printResult() {
    let ergbox = document.getElementById('erg')
    let hmtl_code = '';
    hmtl_code += `
    <div id="questionBox">
    <div id="balken">
        <h2 id="now">Results</h2>
        <canvas id="myChart2" style="width:100%;max-height:80%"></canvas>
    </div>
                 

      </div>
                `
   /**button
    *           <div id="b">
    <button onclick="window.location.reload()">
        Retry
    </button>
</div>
    */
    ergbox.innerHTML = hmtl_code;

    var xValues2 = ["correct", "incorrect"];
    var yValues2 = [(totalPoints), (actQuiz.length - totalPoints)];
    var barColors2 = [
        "green",
        "red"
    ];

    new Chart("myChart2", {
        type: "pie",
        data: {
            labels: xValues2,
            datasets: [{
                backgroundColor: barColors2,
                data: yValues2
            }]
        }
    });
}

function randomOutput(randomN) {
    let ergbox = document.getElementById('erg')
    let html_code = '';
    if (actMusicQuiz) {
        html_code += `<div id="questionBox">
                    <div id="audioWrap">
                        <h2>Song ${actQuestion + 1}:</h2>
                        <audio controls>
                                                <source src="./music/short_clips/${actQuiz[actQuestion].question}" type="audio/mpeg">
                                            Your browser does not support the audio element.
                                        </audio></div>
                                        <div id="quizAlignWrap"><div id="id1">
                    `
    } else {
        html_code += `
        <div id="questionBox">
                        <h2>Question ${actQuestion + 1}:</h2>
                        <p id="question">${actQuiz[actQuestion].question}</p>
                        <div id="quizAlignWrap"><div id="id1">`
    }

    //Option 1
    if (randomN === 1) {
        html_code += `<label class="radio-button">
                            <input value="1" name="example-radio" type="radio">
                            <span class="radio"></span>
                            ${actQuiz[actQuestion].rightAnswer}
                        </label>

                        <label class="radio-button">
                            <input value="0" name="example-radio" type="radio">
                            <span class="radio"></span>
                            ${actQuiz[actQuestion].wrongAnswer1}
                        </label>
                        <label class="radio-button">
                            <input value="0" name="example-radio" type="radio">
                            <span class="radio"></span>
                            ${actQuiz[actQuestion].wrongAnswer2}
                        </label>
                        <label class="radio-button">
                            <input value="0" name="example-radio" type="radio">
                            <span class="radio"></span>
                            ${actQuiz[actQuestion].wrongAnswer3}
                        </label>`
    } else if (randomN === 2) { //Option 2
        html_code += `<label class="radio-button">
                            <input value="0" name="example-radio" type="radio">
                            <span class="radio"></span>
                            ${actQuiz[actQuestion].wrongAnswer3}
                        </label>

                        <label class="radio-button">
                            <input value="1" name="example-radio" type="radio">
                            <span class="radio"></span>
                            ${actQuiz[actQuestion].rightAnswer}
                        </label>
                        <label class="radio-button">
                            <input value="0" name="example-radio" type="radio">
                            <span class="radio"></span>
                            ${actQuiz[actQuestion].wrongAnswer2}
                        </label>
                        <label class="radio-button">
                            <input value="0" name="example-radio" type="radio">
                            <span class="radio"></span>
                            ${actQuiz[actQuestion].wrongAnswer1}
                        </label>`
    } else if (randomN === 3) { //Option 3
        html_code += `<label class="radio-button">
                            <input value="0" name="example-radio" type="radio">
                            <span class="radio"></span>
                            ${actQuiz[actQuestion].wrongAnswer2}
                        </label>

                        <label class="radio-button">
                            <input value="0" name="example-radio" type="radio">
                            <span class="radio"></span>
                            ${actQuiz[actQuestion].wrongAnswer1}
                        </label>
                        <label class="radio-button">
                            <input value="1" name="example-radio" type="radio">
                            <span class="radio"></span>
                            ${actQuiz[actQuestion].rightAnswer}
                        </label>
                        <label class="radio-button">
                            <input value="0" name="example-radio" type="radio">
                            <span class="radio"></span>
                            ${actQuiz[actQuestion].wrongAnswer3}
                        </label>`
    } else if (randomN === 4) { //Option 3
        html_code += `<label class="radio-button">
                            <input value="0" name="example-radio" type="radio">
                            <span class="radio"></span>
                            ${actQuiz[actQuestion].wrongAnswer1}
                        </label>

                        <label class="radio-button">
                            <input value="0" name="example-radio" type="radio">
                            <span class="radio"></span>
                            ${actQuiz[actQuestion].wrongAnswer2}
                        </label>
                        <label class="radio-button">
                            <input value="0" name="example-radio" type="radio">
                            <span class="radio"></span>
                            ${actQuiz[actQuestion].wrongAnswer3}
                        </label>
                        <label class="radio-button">
                            <input value="1" name="example-radio" type="radio">
                            <span class="radio"></span>
                            ${actQuiz[actQuestion].rightAnswer}
                        </label>`
    }

    if (actQuiz == questionsMusic) {
        html_code += `</div>
                    <div id="id3"><img src="./img/Quiz/${actQuiz[actQuestion].src}" alt=""></div>
                </div>`
    } else {
        html_code += `</div>
                    <div id="id2"><img src="./img/Quiz/${actQuiz[actQuestion].src}" alt=""></div>
                </div>`
    }
    html_code += `
                        <div id="buttonAlign">
                            <button class="button_next" onclick="proofeResult()"> Next
                                <div class="icon">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
                                        <path fill="none" d="M0 0h24v24H0z"></path>
                                        <path fill="currentColor"
                                            d="M16.172 11l-5.364-5.364 1.414-1.414L20 12l-7.778 7.778-1.414-1.414L16.172 13H4v-2z">
                                        </path>
                                    </svg>
                                </div>
                            </button>
                        </div></div>`
    ergbox.innerHTML = html_code;
}