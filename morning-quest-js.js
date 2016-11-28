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
    pastabox = document.getElementById('pastabox');

    
function countdown( elementName, minutes, seconds )
{
    var element, endTime, hours, mins, msLeft, time;

    function twoDigits( n )
    {
        return (n <= 9 ? "0" + n : n);
    }

    function updateTimer()
    {
        msLeft = endTime - (+new Date);
        if ( msLeft < 1000 ) {
            element.innerHTML = "countdown's over!";
        } else {
            time = new Date( msLeft );
            hours = time.getUTCHours();
            mins = time.getUTCMinutes();
            element.innerHTML = (hours ? hours + ':' + twoDigits( mins ) : mins) + ':' + twoDigits( time.getUTCSeconds() );
            setTimeout( updateTimer, time.getUTCMilliseconds() + 500 );
        }
    }

    element = document.getElementById( elementName );
    endTime = (+new Date) + 1000 * (60*minutes + seconds) + 500;
    updateTimer();
}


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
        countdown( "countdown", 5, 0 );
    }     
}

play.addEventListener('click',click) ;




// OBJECTS

function get_navigo(){
    var navigoanimate = document.getElementsByClassName('navigo_appear');
    navigo.classList.add('navigo_appear');
}

navigo.addEventListener("click", get_navigo);


function get_cle(){
    var cleanimate = document.getElementsByClassName('cle_appear');
    cle.classList.add('cle_appear');
}

cle.addEventListener("click", get_cle);


function get_mac(){
    var macanimate = document.getElementsByClassName('mac_appear');
    mac.classList.add('mac_appear');
}

mac.addEventListener("click", get_mac);


function get_iphone(){
    var iphoneanimate = document.getElementsByClassName('iphone_appear');
    iphone.classList.add('iphone_appear');
}

iphone.addEventListener("click", get_iphone);

function get_pastabox(){
    var pastaboxanimate = document.getElementsByClassName('pastabox_appear');
    pastabox.classList.add('pastabox_appear');
}

pastabox.addEventListener("click", get_pastabox);


// TIMER


