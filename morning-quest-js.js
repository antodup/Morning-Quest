
var play = document.getElementById('play'),
	start = document.getElementById('start'),
	home1 = document.getElementById('home1'),
	home2 = document.getElementById('home2'),
	input = document.getElementById('name'),
    
    counter = document.getElementById('counter'),
    go = 3;
    


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


            var interval = setInterval(numbers, 1750);

            if (counter.innerHTML == 'GO !')
                clearInterval(interval);

        }
    
}

function numbers () {
    
    counter.innerHTML = go;
    
     if (go > 0){
        go--;
        console.log(go);
    } else {
        counter.innerHTML = 'GO !'; 
    }     
}

play.addEventListener('click',click) ;