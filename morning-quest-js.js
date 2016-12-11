var play = document.getElementById('play'),
	start = document.getElementById('start'),
	home1 = document.getElementById('home1'),
	home2 = document.getElementById('home2'),
	input = document.getElementById('name'),
    interval,

    counter = document.getElementById('counter'),
    go = 3,
    
    navigo = document.getElementById('navigoImg'),
    cle = document.getElementById('cle'),
    mac = document.getElementById('mac'), 
    iphone = document.getElementById('iphone'),
    pastabox = document.getElementById('pastabox'),
    goal = 0, 
    
    countdown = document.getElementById('countdown'),
    _sec = 60,
    _min,
    
    sound, 
    sound_loose,
    sound_win,
    
    lock = 0,
    popup = document.getElementById('popup'), 
    score_name = document.getElementById('score_name'),
    score_count = document.getElementById('score_count'), 
    
    restart = document.getElementById('restart');

var click = function() {  

        if (input.value==""){
            alert ('Tu dois remplir le champs !');

        } else {

            var animate = document.getElementsByClassName('animate');
            start.classList.add ('animate');

            var open1 = document.getElementsByClassName('open1');
            home1.classList.add('open1');

            var open2 = document.getElementsByClassName('open2'); 
            home2.classList.add('open2');

            var startcounter = document.getElementsByClassName('counter'); 
            counter.classList.add('counter');

            document.getElementById("figure").style.display = "inline-block";
            
            document.getElementById("sound-on").style.display = "inline-block";

            interval = setInterval(numbers, 1750);  
            
            
            if (document.getElementById('3min').checked){
                countdown.innerHTML = "3:00";
                _min = 2;
            }
            
            if (document.getElementById('2min').checked){
                countdown.innerHTML = "2:00";
                _min = 1; 
            }
            
            if (document.getElementById('1min').checked){
                countdown.innerHTML = "1:00";
                _min = 0; 
            }
        }
}

//COUNT 

function numbers () {
    
    counter.innerHTML = go;
    
     if (go > 0){
        go--;
        console.log(go);
    } else {
        console.log("toto");
        counter.innerHTML = 'GO !'; 
        clearInterval(interval); 
        lock = 1;
        console.log(lock);
        decrease = setInterval(count, 1000);
        
        sound = document.createElement('audio');
        sound.setAttribute('src', 'SOUND/Mission-Impossible.mp3');
        sound.setAttribute('autoplay', ''); 
        sound.setAttribute('loop', '');
        
        function count () {
            
          if (_sec == 0) {
              _sec = 60; 
              -- _min; 
              countdown.innerhtml = _min + ":" + _sec;
              
          } else {
              -- _sec;
              countdown.innerHTML = _min + ":" + _sec;
          }
            
          if (_sec < 10){
                countdown.innerHTML = _min + ":0" +_sec;
          }
            
          if (_min == 0 && _sec == 0){
            var img_loose = document.createElement('img');
            img_loose.setAttribute('id', 'loose');
            img_loose.setAttribute('src', 'images/loose.png');
              
            img_loose.setAttribute('class', 'loose-anim'); 
            img_loose.classList.add('loose-anim');
              
            var destination_loose = document.getElementById('house');
            destination_loose.appendChild(img_loose);
            
            sound.volume=0;
            sound_loose = document.createElement('audio'); 
            sound_loose.setAttribute('src', 'SOUND/Sad-Trombone.mp3'); 
            sound_loose.setAttribute('autoplay', '')
              
            clearInterval(decrease);
              
            popup.setAttribute('class', 'score');
            popup.classList.add('score'); 
        
            input = document.getElementById('name').value;
            console.log(input);
            score_name.innerHTML = input; 
            score_count.innerHTML = _min + ":" + _sec;  
          }  
        }
    }
}

play.addEventListener('click',click) ;


// OBJECTS

function get_navigo(){
    var navigoanimate = document.getElementsByClassName('navigo_appear');
    
    if (lock == 1){
        navigo.classList.add('navigo_appear');
        goal++;
        check();
    }
}

function get_cle(){
    var cleanimate = document.getElementsByClassName('cle_appear');
    
    if (lock == 1){
        cle.classList.add('cle_appear');
        goal++;
        check();
    }
}


function get_mac(){
    var macanimate = document.getElementsByClassName('mac_appear');
    
    if (lock == 1){
        mac.classList.add('mac_appear');
        goal++;
        check();
    }
}

function get_iphone(){
    var iphoneanimate = document.getElementsByClassName('iphone_appear');
    
    if (lock == 1){
        iphone.classList.add('iphone_appear');
        goal++;
        check();
    }
}

function get_pastabox(){
    var pastaboxanimate = document.getElementsByClassName('pastabox_appear');
    
    if (lock == 1){
        pastabox.classList.add('pastabox_appear');
        goal++;
        check();
    }
}

navigo.addEventListener("click", get_navigo);
cle.addEventListener("click", get_cle);
mac.addEventListener("click", get_mac);
iphone.addEventListener("click", get_iphone);
pastabox.addEventListener("click", get_pastabox);


function check () {
    if (goal==5){
        var img_win = document.createElement('img');
        img_win.setAttribute('id', 'win');
        img_win.setAttribute('src', 'images/youwin.png');
        
        img_win.setAttribute('class', 'win-anim');
        img_win.classList.add('win-anim');
              
        var destination_win = document.getElementById('house');
        destination_win.appendChild(img_win);
        
        clearInterval(decrease);
        
        sound.volume=0;
        sound_win = document.createElement('audio'); 
        sound_win.setAttribute('src', 'SOUND/Applaudissement.mp3'); 
        sound_win.setAttribute('autoplay', ''); 
        
        popup.setAttribute('class', 'score');
        popup.classList.add('score'); 
        
        input = document.getElementById('name').value;
        console.log(input);
        score_name.innerHTML = input; 
        score_count.innerHTML = _min + ":" + _sec;

        
    } 
}


//RELOAD
function reload () {
    restart = window.location.reload(); 
}

restart.addEventListener("click", reload);


// MUTE SOUND

var soundtest = 1;

var mute = document.getElementById('sound-on');

function _muteSound () {
    mute.setAttribute('src', 'images/sound-mute.svg');
    
    sound.volume=0;
    
    document.getElementById("sound-on").style.backgroundColor = "rgb(255, 181, 0)";
    document.getElementById("sound-on").style.border = "2px solid #B48731";
}

mute.addEventListener('click', toggle_sound);

function _activeSound(){
    
    console.log('totodzs');
    mute.setAttribute('src', 'images/sound-on.svg')
    sound.volume=1;
    
    document.getElementById("sound-on").style.backgroundColor = "#B48731";
    document.getElementById("sound-on").style.border = "2px solid rgb(255, 181, 0) ";
}


function toggle_sound(){
    if(soundtest==1){
        _muteSound();
        soundtest=0;
        console.log(soundtest)
    }
    
    else {
        _activeSound();
        soundtest=1;
    }
}

