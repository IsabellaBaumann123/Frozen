//Navigationsleiste
function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  }

//Overlay
function on() {
  document.getElementById("overlay").style.display = "block";
}

function off() {
  document.getElementById("overlay").style.display = "none";
}

/**********toggle switch https://codepen.io/ananyaneogi/pen/zXZyMP *******************/
const toggleSwitch = document.querySelector('.theme-switch input[type="checkbox"]');
const currentTheme = localStorage.getItem('theme');
if(currentTheme == null){
  document.documentElement.setAttribute('data-theme', 'elsa');
}
if (currentTheme) {
    document.documentElement.setAttribute('data-theme', currentTheme);
  
    if (currentTheme === 'elsa') {
        toggleSwitch.checked = true;
    }
}

function switchTheme(e) {
    if (e.target.checked) {
        document.documentElement.setAttribute('data-theme', 'elsa');
        localStorage.setItem('theme', 'elsa');
    }
    else {        document.documentElement.setAttribute('data-theme', 'anna');
          localStorage.setItem('theme', 'anna');
    }    
}

toggleSwitch.addEventListener('change', switchTheme, false);