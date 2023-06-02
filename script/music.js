//Playlists
let playlist1 = [
    { title: "Frozen Heart", url: "1/FrozenHeart.mp3", image: "FrozenHeart.jpg" },
    { title: "Wanna Build A Snowman", url: "1/DoYouWannaBuildASnowman.mp3", image: "DoYouWannaBuildASnowman.jpg" },
    { title: "First Time In Forever", url: "1/ForTheFirstTimeInForever.mp3", image: "ForTheFirstTimeInForever.jpg" },
    { title: "Love Is An Open Door", url: "1/LoveIsAnOpenDoor.mp3", image: "LoveIsAnOpenDoor.jpg" },
    { title: "Let It Go", url: "1/LetItGo.mp3", image: "LetItGo.jpg" },
    { title: "Reindeers Are Better Than People", url: "1/ReindeersAreBetterThanPeople.mp3", image: "ReindeersAreBetterThanPeople.jpg" },
    { title: "In Summer", url: "1/InSummer.mp3", image: "InSummer.jpg" },
    { title: "For The First Time In Forever (Reprise)", url: "1/ForTheFirstTimeInForeverReprise.mp3", image: "ForTheFirstTimeInForeverReprise.jpg" },
    { title: "Fixer Upper", url: "1/FixerUpper.mp3", image: "FixerUpper.jpg" }

];
let playlist2 = [
    { title: "All Is Found", url: "2/AllIsFound.mp3", image: "AllIsFound.jpg" },
    { title: "Some Things Never Change", url: "2/SomeThingsNeverChange.mp3", image: "SomeThingsNeverChange.jpg" },
    { title: "Into The Unknown", url: "2/IntoTheUnknown.mp3", image: "IntoTheUnknown.jpg" },
    { title: "When I Am Older", url: "2/WhenIAmOlder.mp3", image: "WhenIAmOlder.jpg" },
    { title: "Reindeers Are Better Than People", url: "2/ReindeersAreBetterThanPeople.mp3", image: "ReindeersAreBetterThanPeople2.jpg" },
    { title: "Lost In The Woods", url: "2/LostInTheWoods.mp3", image: "LostInTheWoods.jpg" },
    { title: "Show Yourself", url: "2/ShowYourself.mp3", image: "ShowYourself.jpg" },
    { title: "The Next Right Thing", url: "2/TheNextRightThing.mp3", image: "TheNextRightThing.jpg" },
];

let likedSongs = []
let isLiked = false;
let words_storage = []

loadAll()
window.addEventListener("resize", resizeFunction);

function loadAll() {
    let html_code = '';

    //handy
    if (window.innerWidth > 0 && window.innerWidth < 650) {
        html_code = `<div class="player">
        <div class="details">
            <div class="track-art" onclick="on()"></div>
            <div id="songDetails">
                <div class="track-name">Track Name</div>
                <div class="track-artist">Disney</div>
            </div>
            <i onclick="likeClick()" class="fa fa-heart" class="heart"></i>
            <!--
            <div>
                <img src="./img/music/heart.png" alt="">
            </div>-->
        </div>

        <div class="buttons">
            <div class="prev-track" onclick="prevTrack()"><i class="fa fa-step-backward fa-2x"></i></div>
            <div class="playpause-track" onclick="playpauseTrack()"><i class="fa fa-play-circle fa-3x"></i></div>
            <div class="next-track" onclick="nextTrack()"><i class="fa fa-step-forward fa-2x"></i></div>
        </div>
        <div class="slider_container slider_middle">
            <div class="current-time">00:00</div>
            <input type="range" min="1" max="100" value="0" class="seek_slider" onchange="seekTo()">
            <div class="total-duration">00:00</div>
        </div>
        <div class="slider_container slider_right">
            <i class="fa fa-volume-down"></i>
            <input type="range" min="1" max="100" value="99" class="volume_slider" onchange="setVolume()">
            <i class="fa fa-volume-up"></i>
        </div>
    </div>`
    }
    //tablet
    if (window.innerWidth > 650 && window.innerWidth < 1200) {
        html_code += `<div class="player">
        <div class="details">
            <div class="track-art" onclick="on()"></div>
            <div id="songDetails">
                <div class="track-name">Track Name</div>
                <div class="track-artist">Disney</div>
            </div>
            <i onclick="likeClick()" class="fa fa-heart" class="heart"></i>
            <!--
                <div>
                    <img src="./img/music/heart.png" alt="">
                </div>-->
        </div>
        <div id="slider_and_buttons">
            <div class="buttons">
                <div class="prev-track" onclick="prevTrack()"><i class="fa fa-step-backward fa-2x"></i></div>
                <div class="playpause-track" onclick="playpauseTrack()"><i class="fa fa-play-circle fa-5x"></i>
                </div>
                <div class="next-track" onclick="nextTrack()"><i class="fa fa-step-forward fa-2x"></i></div>
            </div>
            <div class="slider_container slider_middle">
                <div class="current-time">00:00</div>
                <input type="range" min="1" max="100" value="0" class="seek_slider" onchange="seekTo()">
                <div class="total-duration">00:00</div>
            </div>
        </div>

        <div class="slider_container slider_right">
            <i class="fa fa-volume-down"></i>
            <input type="range" min="1" max="100" value="99" class="volume_slider" onchange="setVolume()">
            <i class="fa fa-volume-up"></i>
        </div>

    </div>`;
    }

    //laptop
    if (window.innerWidth > 1200) {
        html_code += 
        `<div class="player">
            <div class="details">
                <div class="track-art" onclick="on()"></div>
                <div id="songDetails">
                    <div class="track-name">Track Name</div>
                    <div class="track-artist">Disney</div>
                </div>
                <i onclick="likeClick()" class="fa fa-heart" class="heart"></i>
                <!--
                    <div>
                        <img src="./img/music/heart.png" alt="">
                    </div>-->
            </div>
            <div id="slider_and_buttons">
                <div class="buttons">
                    <div class="prev-track" onclick="prevTrack()"><i class="fa fa-step-backward fa-2x"></i></div>
                    <div class="playpause-track" onclick="playpauseTrack()"><i class="fa fa-play-circle fa-5x"></i>
                    </div>
                    <div class="next-track" onclick="nextTrack()"><i class="fa fa-step-forward fa-2x"></i></div>
                </div>
                <div class="slider_container slider_middle">
                    <div class="current-time">00:00</div>
                    <input type="range" min="1" max="100" value="0" class="seek_slider" onchange="seekTo()">
                    <div class="total-duration">00:00</div>
                </div>
            </div>

            <div class="slider_container slider_right">
                <i class="fa fa-volume-down"></i>
                <input type="range" min="1" max="100" value="99" class="volume_slider" onchange="setVolume()">
                <i class="fa fa-volume-up"></i>
            </div>
    </div>`;
    }
    document.getElementById('ergbox').innerHTML = html_code;
    //window.location.reload()

}

function resizeFunction() {
    let html_code = '';

    //handy
    if (window.innerWidth > 0 && window.innerWidth < 650) {
        html_code = `<div class="player">
        <div class="details">
            <div class="track-art" onclick="on()"></div>
            <div id="songDetails">
                <div class="track-name">Track Name</div>
                <div class="track-artist">Disney</div>
            </div>
            <i onclick="likeClick()" class="fa fa-heart" class="heart"></i>
            <!--
            <div>
                <img src="./img/music/heart.png" alt="">
            </div>-->
        </div>

        <div class="buttons">
            <div class="prev-track" onclick="prevTrack()"><i class="fa fa-step-backward fa-2x"></i></div>
            <div class="playpause-track" onclick="playpauseTrack()"><i class="fa fa-play-circle fa-3x"></i></div>
            <div class="next-track" onclick="nextTrack()"><i class="fa fa-step-forward fa-2x"></i></div>
        </div>
        <div class="slider_container slider_middle">
            <div class="current-time">00:00</div>
            <input type="range" min="1" max="100" value="0" class="seek_slider" onchange="seekTo()">
            <div class="total-duration">00:00</div>
        </div>
        <div class="slider_container slider_right">
            <i class="fa fa-volume-down"></i>
            <input type="range" min="1" max="100" value="99" class="volume_slider" onchange="setVolume()">
            <i class="fa fa-volume-up"></i>
        </div>
    </div>`
    }
    //tablet
    if (window.innerWidth > 650 && window.innerWidth < 1200) {
        html_code += `<div class="player">
        <div class="details">
            <div class="track-art" onclick="on()"></div>
            <div id="songDetails">
                <div class="track-name">Track Name</div>
                <div class="track-artist">Disney</div>
            </div>
            <i onclick="likeClick()" class="fa fa-heart" class="heart"></i>
            <!--
                <div>
                    <img src="./img/music/heart.png" alt="">
                </div>-->
        </div>
        <div id="slider_and_buttons">
            <div class="buttons">
                <div class="prev-track" onclick="prevTrack()"><i class="fa fa-step-backward fa-2x"></i></div>
                <div class="playpause-track" onclick="playpauseTrack()"><i class="fa fa-play-circle fa-5x"></i>
                </div>
                <div class="next-track" onclick="nextTrack()"><i class="fa fa-step-forward fa-2x"></i></div>
            </div>
            <div class="slider_container slider_middle">
                <div class="current-time">00:00</div>
                <input type="range" min="1" max="100" value="0" class="seek_slider" onchange="seekTo()">
                <div class="total-duration">00:00</div>
            </div>
        </div>

        <div class="slider_container slider_right">
            <i class="fa fa-volume-down"></i>
            <input type="range" min="1" max="100" value="99" class="volume_slider" onchange="setVolume()">
            <i class="fa fa-volume-up"></i>
        </div>

    </div>`;
    }

    //laptop
    if (window.innerWidth > 1200) {
        html_code += 
        `<div class="player">
            <div class="details">
                <div class="track-art" onclick="on()"></div>
                <div id="songDetails">
                    <div class="track-name">Track Name</div>
                    <div class="track-artist">Disney</div>
                </div>
                <i onclick="likeClick()" class="fa fa-heart" class="heart"></i>
                <!--
                    <div>
                        <img src="./img/music/heart.png" alt="">
                    </div>-->
            </div>
            <div id="slider_and_buttons">
                <div class="buttons">
                    <div class="prev-track" onclick="prevTrack()"><i class="fa fa-step-backward fa-2x"></i></div>
                    <div class="playpause-track" onclick="playpauseTrack()"><i class="fa fa-play-circle fa-5x"></i>
                    </div>
                    <div class="next-track" onclick="nextTrack()"><i class="fa fa-step-forward fa-2x"></i></div>
                </div>
                <div class="slider_container slider_middle">
                    <div class="current-time">00:00</div>
                    <input type="range" min="1" max="100" value="0" class="seek_slider" onchange="seekTo()">
                    <div class="total-duration">00:00</div>
                </div>
            </div>

            <div class="slider_container slider_right">
                <i class="fa fa-volume-down"></i>
                <input type="range" min="1" max="100" value="99" class="volume_slider" onchange="setVolume()">
                <i class="fa fa-volume-up"></i>
            </div>
    </div>`;
    }
    document.getElementById('ergbox').innerHTML = html_code;
    window.location.reload()

}







let track_art = document.getElementsByClassName("track-art");
let track_title = document.getElementsByClassName("track-name");
let track_artist = document.getElementsByClassName("track-artist");
let playpause_btn = document.getElementsByClassName("playpause-track");
//red heart

let heart = document.getElementsByClassName("fa-heart");


let track_arts = [];
let track_titles = [];
let track_artists = [];
let playpause_btns = [];
let hearts = [];
for (let i = 0; i < track_art.length; i++) {
    track_arts[i] = track_art[i]
}
for (let i = 0; i < track_title.length; i++) {
    track_titles[i] = track_title[i]
}
for (let i = 0; i < track_artist.length; i++) {
    track_artists[i] = track_artist[i]
}
for (let i = 0; i < playpause_btn.length; i++) {
    playpause_btns[i] = playpause_btn[i]
}
for (let i = 0; i < heart.length; i++) {
    hearts[i] = heart[i]
}

let next_btn = document.querySelector(".next-track");
let prev_btn = document.querySelector(".prev-track");

let slider = document.querySelector(".seek_slider");
let volumeSlider = document.querySelector(".volume_slider");
let currentTime = document.querySelector(".current-time");
let totalTime = document.querySelector(".total-duration");

let actSongIndex = 0;
let isPlaying = false;
let updateTimer;



// Create new audio element
//https://ide.geeksforgeeks.org/online-html-editor/T3gdWUn4aX
let currentSong = document.createElement('audio');


// Define the tracks that have to be played
let actPlaylist = playlist1;

function loadTrack(track_index) {
    //console.log(actPlaylist[track_index].url)
    // Daten aus Local Storage auslesen

    if ((localStorage['fav'])) {
        words_storage = JSON.parse(localStorage['fav']);


        console.log(words_storage);

        for(let i = 0; i < words_storage.length; i++){
            if(words_storage[i] == actPlaylist[track_index].url){
                console.log('juhu')
                redHeart();
                break;
            } else {
                greyHeart();
            }
        }
    }

    clearInterval(updateTimer);
    resetValues();

    currentSong.src = `./music/${actPlaylist[track_index].url}`;
    currentSong.load();

    //print picture
    for (let i = 0; i < track_art.length; i++) {
        track_arts[i].style.backgroundImage = `url(./img/music_covers/${actPlaylist[track_index].image})`
    }

    //print title
    for (let i = 0; i < track_title.length; i++) {
        track_titles[i].textContent = actPlaylist[track_index].title;
    }

    //print artist
    for (let i = 0; i < track_artist.length; i++) {
        track_artists[i].textContent = "Disney";
    }

    updateTimer = setInterval(seekUpdate, 1000);

    currentSong.addEventListener("ended", nextTrack);
}

function resetValues() {
    currentTime.textContent = "00:00";
    totalTime.textContent = "00:00";
    slider.value = 0;
}

function playpauseTrack() {
    if (!isPlaying) {
        playTrack();
    }
    else {
        pauseTrack();
    }
}

function playTrack() {
    currentSong.play();
    isPlaying = true;

    //3x bei handy, wenn stelle [i]
    //print pause button
    for (let i = 0; i < playpause_btn.length; i++) {
        playpause_btns[i].innerHTML = '<i class="fa fa-pause-circle fa-5x"></i>';
    }
}

function pauseTrack() {
    currentSong.pause();
    isPlaying = false;

    //print play button
    //print pause button
    for (let i = 0; i < playpause_btn.length; i++) {
        playpause_btns[i].innerHTML = '<i class="fa fa-play-circle fa-5x"></i>';
    }
}

function nextTrack() {
    greyHeart()
    if (actSongIndex < actPlaylist.length - 1)
        actSongIndex += 1;
    else actSongIndex = 0;
    loadTrack(actSongIndex);
    playTrack();
}

function prevTrack() {
    if (actSongIndex > 0)
        actSongIndex -= 1;
    else actSongIndex = actPlaylist.length;
    loadTrack(actSongIndex);
    playTrack();
}

function seekTo() {
    seekto = currentSong.duration * (slider.value / 100);
    currentSong.currentTime = seekto;
}

function setVolume() {
    currentSong.volume = volumeSlider.value / 100;
}

function seekUpdate() {
    let seekPosition = 0;

    if (!isNaN(currentSong.duration)) {
        seekPosition = currentSong.currentTime * (100 / currentSong.duration);
        slider.value = seekPosition;

        let currentMinutes = Math.floor(currentSong.currentTime / 60);
        let currentSeconds = Math.floor(currentSong.currentTime - currentMinutes * 60);
        let durationMinutes = Math.floor(currentSong.duration / 60);
        let durationSeconds = Math.floor(currentSong.duration - durationMinutes * 60);

        if (currentSeconds < 10) { currentSeconds = "0" + currentSeconds; }
        if (durationSeconds < 10) { durationSeconds = "0" + durationSeconds; }
        if (currentMinutes < 10) { currentMinutes = "0" + currentMinutes; }
        if (durationMinutes < 10) { durationMinutes = "0" + durationMinutes; }

        currentTime.textContent = currentMinutes + ":" + currentSeconds;
        totalTime.textContent = durationMinutes + ":" + durationSeconds;
    }
}

loadTrack(actSongIndex);

function changePlaylist(playlist) {
    if (playlist == 1) {
        actPlaylist = playlist1;
        actSongIndex = 0;
        isPlaying = true;
        loadTrack(actSongIndex);
    } else if (playlist == 2) {
        actPlaylist = playlist2;
        actSongIndex = 0;
        isPlaying = true;
        loadTrack(actSongIndex);
    }

}


function redHeart() {
    isLiked = true;
    for (let i = 0; i < heart.length; i++) {
        //hearts[i].classList.toggle('red');
        hearts[i].style.color = "red"
    }
    // Update localStorage
    localStorage['fav'] = JSON.stringify(likedSongs);
}
function greyHeart() {
    isLiked = false;
    for (let i = 0; i < likedSongs.length; i++) {
        
        if (likedSongs[i] === actPlaylist[actSongIndex].url) {
            console.log('for 1')
            //console.log("before" + likedSongs[i])
            likedSongs[i] = '';
            //console.log("after" + likedSongs[i])
        }
    }
    /*for (let i = 0; i < words_storage.length; i++) {
        
        if (words_storage[i] === actPlaylist[actSongIndex].url) {
            console.log('for 2')
            //console.log("before" + words_storage[i])
            words_storage[i] = '';
            //console.log("after" + words_storage[i])
        }
    }*/

    
    for (let i = 0; i < heart.length; i++) {
        //hearts[i].classList.toggle('#1d3544');
        hearts[i].style.color = "grey"
    }
    console.log(likedSongs[0])
        localStorage['fav'] = JSON.stringify(likedSongs);

}

function likeClick(){
    if (isLiked) {
        greyHeart()
    } else {
        redHeart()
    }
    let like = actPlaylist[actSongIndex].url;

    // Local Storage überprüfen
    if ((localStorage['fav'])) {
        likedSongs = JSON.parse(localStorage['fav']);
    }

    // Neuen Eintrag hinzufügen
    likedSongs.push(like);

    // Update localStorage
    localStorage['fav'] = JSON.stringify(likedSongs);
}


//window.addEventListener("resize", resizeFunction);
/**
function resizeFunction() {
    let html_code = '';
    //handy
    if (window.innerWidth > 0 && window.innerWidth < 650) {
        html_code = `<div class="player">
        <div class="details">
            <div class="track-art" onclick="on()"></div>
            <div id="songDetails">
                <div class="track-name">Track Name</div>
                <div class="track-artist">Disney</div>
            </div>
            <i class="fa fa-heart" class="heart"></i>
            <!--
            <div>
                <img src="./img/music/heart.png" alt="">
            </div>-->
        </div>

        <div class="buttons">
            <div class="prev-track" onclick="prevTrack()"><i class="fa fa-step-backward fa-2x"></i></div>
            <div class="playpause-track" onclick="playpauseTrack()"><i class="fa fa-play-circle fa-3x"></i></div>
            <div class="next-track" onclick="nextTrack()"><i class="fa fa-step-forward fa-2x"></i></div>
        </div>
        <div class="slider_container slider_middle">
            <div class="current-time">00:00</div>
            <input type="range" min="1" max="100" value="0" class="seek_slider" onchange="seekTo()">
            <div class="total-duration">00:00</div>
        </div>
        <div class="slider_container slider_right">
            <i class="fa fa-volume-down"></i>
            <input type="range" min="1" max="100" value="99" class="volume_slider" onchange="setVolume()">
            <i class="fa fa-volume-up"></i>
        </div>
    </div>`
    }
    //tablet
    if (window.innerWidth > 650 && window.innerWidth < 1200) {
        html_code += `<div class="player">
        <div class="details">
            <div class="track-art" onclick="on()"></div>
            <div id="songDetails">
                <div class="track-name">Track Name</div>
                <div class="track-artist">Disney</div>
            </div>
            <i class="fa fa-heart" class="heart"></i>
            <!--
                <div>
                    <img src="./img/music/heart.png" alt="">
                </div>-->
        </div>
        <div id="slider_and_buttons">
            <div class="buttons">
                <div class="prev-track" onclick="prevTrack()"><i class="fa fa-step-backward fa-2x"></i></div>
                <div class="playpause-track" onclick="playpauseTrack()"><i class="fa fa-play-circle fa-5x"></i>
                </div>
                <div class="next-track" onclick="nextTrack()"><i class="fa fa-step-forward fa-2x"></i></div>
            </div>
            <div class="slider_container slider_middle">
                <div class="current-time">00:00</div>
                <input type="range" min="1" max="100" value="0" class="seek_slider" onchange="seekTo()">
                <div class="total-duration">00:00</div>
            </div>
        </div>

        <div class="slider_container slider_right">
            <i class="fa fa-volume-down"></i>
            <input type="range" min="1" max="100" value="99" class="volume_slider" onchange="setVolume()">
            <i class="fa fa-volume-up"></i>
        </div>

    </div>`;
    }

    //laptop
    if (window.innerWidth > 1200) {
        html_code += `<div class="player">
        <div class="details">
            <div class="track-art" onclick="on()"></div>
            <div id="songDetails">
                <div class="track-name">Track Name</div>
                <div class="track-artist">Disney</div>
            </div>
            <i class="fa fa-heart" class="heart"></i>
            <!--
                <div>
                    <img src="./img/music/heart.png" alt="">
                </div>-->
        </div>
        <div id="slider_and_buttons">
            <div class="buttons">
                <div class="prev-track" onclick="prevTrack()"><i class="fa fa-step-backward fa-2x"></i></div>
                <div class="playpause-track" onclick="playpauseTrack()"><i class="fa fa-play-circle fa-5x"></i>
                </div>
                <div class="next-track" onclick="nextTrack()"><i class="fa fa-step-forward fa-2x"></i></div>
            </div>
            <div class="slider_container slider_middle">
                <div class="current-time">00:00</div>
                <input type="range" min="1" max="100" value="0" class="seek_slider" onchange="seekTo()">
                <div class="total-duration">00:00</div>
            </div>
        </div>

        <div class="slider_container slider_right">
            <i class="fa fa-volume-down"></i>
            <input type="range" min="1" max="100" value="99" class="volume_slider" onchange="setVolume()">
            <i class="fa fa-volume-up"></i>
        </div>

    </div>`;
    }
    document.getElementById('ergbox').innerHTML = html_code;

}
**/
//resizeFunction()