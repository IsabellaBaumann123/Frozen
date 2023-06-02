observe()
let elsa = {
    name: "Elsa",
    birthday: "Dec 21",
    image: "elsa.png",
    movies: "1, 2",
    origin: "Kingdom of Arendelle",
    description: "Elsa is the perfect mythic character – magical and larger than life. Grateful her kingdom now accepts her, she works hard to be a good queen."
}
let anna = {
    name: "Anna",
    birthday: "Jul 21",
    image: "anna.png",
    movies: "1, 2",
    origin: "Kingdom of Arendelle",
    description: "Anna is the perfect fairytale character; unflappable, she is the forever optimist. Anna is fine as long as she has her family"
}
let olaf = {
    name: "Olaf",
    birthday: "Dec 16",
    image: "olaf.png",
    movies: "1, 2",
    origin: "Kingdom of Arendelle",
    description: "Created from Elsa’s magical powers, Olaf is by far the friendliest snowman in Arendelle. He is innocent, outgoing and loves all things summer."
}
let sven = {
    name: "Sven",
    birthday: "Mar 02",
    image: "sven.png",
    movies: "1, 2",
    origin: "Kingdom of Arendelle",
    description: "A reindeer with the heart of a Labrador, Sven is Kristoff's loyal friend, sleigh-puller and conscience. "
}
let hans = {
    name: "Hans",
    birthday: "Aug 07",
    image: "hans.png",
    movies: "1, 2",
    origin: "Southern Isles",
    description: "Hans is a handsome royal from a neighboring kingdom who comes to Arendelle for Elsa's coronation. "
}
let kristoff = {
    name: "Kristoff",
    birthday: "Jun 25",
    image: "kristoff.png",
    movies: "1, 2",
    origin: "Kingdom of Arendelle",
    description: "A rugged mountain man and ice harvester by trade, Kristoff was a bit of a loner with his reindeer pal, Sven, until he met Anna. "
}
let snowgies = {
    name: "Snowgies",
    birthday: "-",
    image: "snowgies.png",
    movies: "1, 2",
    origin: "Elsa",
    description: "Snowgies are little snowmen Elsa unwittingly creates every time she sneezes—and she sneezes a lot. "
}
let marshmallow = {
    name: "Marshmallow",
    birthday: "-",
    image: "Marshmallow.png",
    movies: "1",
    origin: "Ice palace",
    description: "Marshmallow is an enormous icy snowman born from Elsa's powers."
}
let oaken = {
    name: "Oaken",
    birthday: "Feb 19",
    image: "oaken.png",
    movies: "1",
    origin: "Kingdom of Arendelle",
    description: "Oaken runs Wandering Oaken's Trading Post and Sauna. "
}
let duke = {
    name: "Duke",
    birthday: "Oct 23",
    image: "Duke-of-Weselton.png",
    movies: "1",
    origin: "Weselton",
    description: "What the Duke of Weselton lacks in stature, he makes up for in arrogance and showboating. "
}
let allCharacters = [
    elsa, anna, olaf, sven, hans, kristoff, oaken, duke, snowgies, marshmallow
]

printCharacters();
/**Ausgabe Characters */
function printCharacters() {
    html_code = `<div class="slide-container">`
    for (let i = 0; i < allCharacters.length; i++) {
        let hidden = ''
        if (i % 2 == 0) {
            hidden = "onscroll_hidden"
          } else {
            hidden = "onscroll_hidden2"
          }
        html_code += `
        <div class="wrapper ${hidden}">
            <div class="card">
                <div class="card_image">
                    <img src="./img/characters/${allCharacters[i].image}" alt="image">
                </div>
                <div class="">
                <div class="card_frozen">Disney</div>
                    <div class="card_header">${allCharacters[i].name}</div>
                    <div class="card_description">
                        <p class="card_info"><b>Birthday: </b>${allCharacters[i].birthday}</p>
                        <p class="card_info"><b>Origin:</b> ${allCharacters[i].origin}</p>
                        <p style="color:#0e1a40" class="description">${allCharacters[i].description}</p>
                    </div>
                    
                </div>
            </div>
        </div>`
    }
    html_code += `</div>`
    document.getElementById('printCharacters').innerHTML = html_code;
}

function observe() {
    // Observer reagiert *px später
    // Wert > 0: Observer reagiert früher
    // Wert < 0: Observer reagiert später
    let observer_options_offset = "0px";

    // Wie viel % des Objekts mit Observer überschneiden müssen
    // Default: 1.0 = 100% 
    let observer_options_threshold = 0.3;
    let observer_options = {
      rootMargin: `0px 0px ${observer_options_offset} 0px`,
      threshold: observer_options_threshold
    }


    // Standard-Code: neuen Observer erstellen
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      //alert('Hallo ich bin da');
      //console.log(entry);
      //console.log(entry.isIntersecting);
      //console.log(entry.target);
      if (entry.isIntersecting) {
        entry.target.classList.add('onscroll_visible')
      } else {
        entry.target.classList.remove('onscroll_visible')
      }
    })
  }, observer_options)



    // Custom-Code: Elemente mit Element-Selektor picken
    // Jedes Element dem Observer zum Überwachen übergeben
    const onscroll_elements = document.getElementsByClassName('onscroll_hidden');
    for (let i = 0; i < onscroll_elements.length; i++) {
        observer.observe(onscroll_elements[i]);
    }

    const onscroll_elements1 = document.getElementsByClassName('onscroll_hidden2');
    for (let i = 0; i < onscroll_elements1.length; i++) {
      observer.observe(onscroll_elements1[i]);
    }
    // Custom-Code Variante2 mit QuerySelector und forEach
    /*
    // Custom-Code: Elemente mit QuerySelector picken
    // Jedes Element dem Observer zum Überwachen übergeben 
    const onscroll_elements = document.querySelectorAll('.onscroll_hidden');
    onscroll_elements.forEach( (el) => {
        observer.observe(el)}
    );
    */

}
observe()