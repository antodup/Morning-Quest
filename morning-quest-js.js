

function get_object(idobject, classobject){
    document.getElementById( idobject ).classList.add( classobject );
}


var navigo = document.getElementById('navigoImg');
navigo.addEventListener("click", get_object('navigoImg', 'appear'));