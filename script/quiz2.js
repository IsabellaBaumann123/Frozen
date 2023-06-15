

let actValue
let input
//Questions
//Questions
let questions = [
  { question: "I like to be around people.", weightElsa: 0, imgSrc: "people.jpg" },
  { question: "I like building snowmen.", weightElsa: 0.5, imgSrc: "snowman.jpg" },
  { question: "I love the winter.", weightElsa: 1, imgSrc: "winter.jpg" },
  { question: "I like to wear my hair in a braid.", weightElsa: 0.5, imgSrc: "braid.jpg" },
  { question: "I am often overexcited.", weightElsa: 0, imgSrc: "overexcited.jpg" },
  { question: "I would like to marry one day.", weightElsa: 0, imgSrc: "kiss.jpg" },
  { question: "I am mysterious.", weightElsa: 1, imgSrc: "mysterious.jpg" },
  { question: "I am stubborn.", weightElsa: 0, imgSrc: "stubborn.jpg" },
  { question: "I am a loner.", weightElsa: 1, imgSrc: "lonely.jpg" },
  { question: "I am adventurous.", weightElsa: 0, imgSrc: "adventurous.jpg" },
  { question: "I trust quickly.", weightElsa: 0, imgSrc: "trust.jpg" },
  { question: "I am disciplined.", weightElsa: 1, imgSrc: "disciplined.jpg" },
]

let actPointsElsa = 0;
let actPointsAnna = 0;
let actQuestion2 = 0;
let maxQuestions = questions.length;
let percentElsa;
let percentAnna;
let possiblePointsElsa = 0
let possiblePointsAnna = 0
let questionBox = document.getElementById('erg');

function calculateBranche(actQuestion) {

  let valuePoints = getTempValue(); //Get value from slider

  //get possible points
  if (questions[actQuestion].weightElsa != null) {
    possiblePointsAnna += ((1 - questions[actQuestion].weightElsa) * 10);
    possiblePointsElsa += (questions[actQuestion].weightElsa * 10);
  }

  let tempPointsElsa = 0;
  let tempPointsAnna = 0;
  actValue = valuePoints;

  console.log("Punkte " + actValue)

  let actWeightAnna = 0;
  let actWeightElsa = 0;

  if (questions[actValue].weightElsa != null) {
    actWeightAnna = (1 - questions[actQuestion].weightElsa);
    actWeightElsa = questions[actQuestion].weightElsa;
  }

  tempPointsAnna = valuePoints * actWeightAnna;
  tempPointsElsa = valuePoints * actWeightElsa;

  actPointsElsa += tempPointsElsa;
  actPointsAnna += tempPointsAnna;
  console.log("punkte anna: " + actPointsAnna);
  console.log("punkte elsa: " + actPointsElsa)

  printQuestion()
}

function lastResult() {
  console.log("pos anna " + possiblePointsAnna + "pos elsa" + possiblePointsElsa)
  //getPossiblePoints();
  percentElsa = (actPointsElsa * 100) / (actPointsAnna + actPointsElsa);
  percentAnna = (actPointsAnna * 100) / (actPointsAnna + actPointsElsa);
}
function startQuiz() {
  // on()
  questionBox.innerHTML = `<div id="questionBox">
                        <h2>Who am I?</h2>
                        <p id="desc">The "Anna or Elsa" Frozen quiz is a personality quiz designed to determine whether your personality traits align more with Anna or Elsa. In this quiz, you will be presented with a series of statements that describe various personality traits or preferences. You will need to rate each statement on a scale from 1 to 10, 1 indicating that the statement is not true for you and 10 indicating that the statement is very true for you. Based on your responses, the quiz will calculate a score that reflects whether you are more like Anna or Elsa.</p>
                        <div id="buttonAlignStart">
                            <button class="button_next" onclick="printQuestion()"> Start
                                <div class="icon">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
                                        <path fill="none" d="M0 0h24v24H0z"></path>
                                        <path fill="currentColor"
                                            d="M16.172 11l-5.364-5.364 1.414-1.414L20 12l-7.778 7.778-1.414-1.414L16.172 13H4v-2z">
                                        </path>
                                    </svg>
                                </div>
                            </button>
                        </div>
                        </div>
                    `
                    
}
function printQuestion() {


  if (actQuestion2 >= maxQuestions) {
    lastResult()
    console.log("Prozent elsa" + percentElsa)
    console.log("Prozent anna" + percentAnna)

    questionBox.innerHTML = `<div id="questionBox">
    <div id="balken">
    <h2 id="now"songQu>Results</h2>
    <canvas id="myChart" style="width:100%;max-height:80%"></canvas>
</div>

    `
    var xValues = ["Anna", "Elsa"];
    var yValues = [(Math.round(percentAnna)),(Math.round(percentElsa))];
    var barColors = [
      "#8f3985",
      "#2968bb"
    ];
    
    new Chart("myChart", {
      type: "pie",
      data: {
        labels: xValues,
        datasets: [{
          backgroundColor: barColors,
          data: yValues
        }]
      }
    });

  } else {
    let html_code = ''
    questionBox.style.backgroundImage = "none"
    questionBox.style.backgroundSize = "none"
    questionBox.style.animation = "scale-up-center 0.4s cubic-bezier(0.390, 0.575, 0.565, 1.000) both"
    //print question
    console.log(actQuestion2)
    html_code = `<div id="questionBox"><div id="gridQuestions"><p id="questions1">${questions[actQuestion2].question}</p><img id="img_Box" src="./img/Quiz/quiz3/${questions[actQuestion2].imgSrc}" alt=""></div>`
    actQuestion2++;
    html_code += `
  <div id= wholeSlider>
    <div id="sliderInput">
        <input type="range" min="0" max="10" id="slider_pinguin">
        </div>
        <label id="numberSlider" for="slider">0</label>
    </div>
    </div>`

    html_code += `<div id="buttonAlignW"><button class="button_next" onclick="calculateBranche(${actQuestion2 - 1})"> Next
        <div class="icon">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z"></path><path fill="currentColor" d="M16.172 11l-5.364-5.364 1.414-1.414L20 12l-7.778 7.778-1.414-1.414L16.172 13H4v-2z"></path></svg>
        </div>
      </button></div>`

    questionBox.innerHTML = html_code;

    getValue()


  }
}
function getTempValue() {
  let tempValue = document.getElementById('slider_pinguin').value
  //let tempValue = document.querySelector("input").value
  return tempValue;
}
/** 
function getValue() {
  document.getElementById('questionBox').style.animation = "none"
  //Pinguin Slider
  input = document.getElementById('slider_pinguin')
  //input = document.querySelector("input");
  //const label = document.querySelector("label");
  const label = document.getElementById('numberSlider')
  let value = Number(input.value) / 100;
  input.style.setProperty("--thumb-rotate", `${value * 0}deg`);
  label.innerHTML = Math.round(value * 100);
  input.value = Math.round(value * 100);

  input.addEventListener("input[type='range']", event => {
    const value = Number(input.value) / 100;
    input.style.setProperty("--thumb-rotate", `${value * 1730}deg`);
    label.innerHTML = Math.round(value * 100);
    input.value = Math.round(value * 100);
  });
}*/
function getValue() {
  document.getElementById('questionBox').style.animation = "none"

  document.getElementById('questionBox').style.animation = "none"
  //Pinguin Slider
  input = document.getElementById('slider_pinguin')
  const label = document.querySelector('label[for="slider"]');
  let value = Number(input.value) / 100;
  input.style.setProperty("--thumb-rotate", `${value * 0}deg`);
  label.innerHTML = Math.round(value * 100);
  input.value = Math.round(value * 100);

  input.addEventListener("input", event => {
    const value = Number(input.value) / 100;
    input.style.setProperty("--thumb-rotate", `${value * 1730}deg`);
    label.innerHTML = Math.round(value * 100);
    input.value = Math.round(value * 100);
  });
}


