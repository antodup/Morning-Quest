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
    _min = 4;

    


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

            interval = setInterval(numbers, 1750);       
            
        }
}


function numbers () {
    
    counter.innerHTML = go;
    
     if (go > 0){
        go--;
        console.log(go);
    } else {
        
        counter.innerHTML = 'GO !'; 
        clearInterval(interval); 

        countdown.innerHTML = "5:00";
        decrease = setInterval(count, 1000);
        
        
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
            alert('PERDU !');
            clearInterval(decrease);
          }  
    }     
}
}

play.addEventListener('click',click) ;


// OBJECTS

function get_navigo(){
    var navigoanimate = document.getElementsByClassName('navigo_appear');
    navigo.classList.add('navigo_appear');
    goal++;
    check();
}

navigo.addEventListener("click", get_navigo);


function get_cle(){
    var cleanimate = document.getElementsByClassName('cle_appear');
    cle.classList.add('cle_appear');
    goal++;
    check();
}

cle.addEventListener("click", get_cle);


function get_mac(){
    var macanimate = document.getElementsByClassName('mac_appear');
    mac.classList.add('mac_appear');
    goal++;
    check();
}

mac.addEventListener("click", get_mac);


function get_iphone(){
    var iphoneanimate = document.getElementsByClassName('iphone_appear');
    iphone.classList.add('iphone_appear');
    goal++;
    check();
}

iphone.addEventListener("click", get_iphone);

function get_pastabox(){
    var pastaboxanimate = document.getElementsByClassName('pastabox_appear');
    pastabox.classList.add('pastabox_appear');
    goal++;
    check();
}

pastabox.addEventListener("click", get_pastabox);

function check () {
    if (goal==5){
        alert ('Bravo tu as Gagné !');
        clearInterval(decrease);
    } 
}

// TIMER

    
