

$(function() {
	
    $("#menu").load("../../menu.html");

});


$(document).ready(
    function(){
        document.getElementById("anyActual").innerHTML = new Date().getFullYear();
        //document.getElementsByTagName("title")[0].innerHTML = "Algorismes i Estructures de Dades";
		document.getElementsByTagName("title")[0].innerHTML = "Programació";
        $('head').append('<link rel="shortcut icon" href="../../favicon.ico"></link>');
        elements = document.getElementsByClassName("backward round");
        for (var i = 0; i < elements.length; i++) {
            elements[i].innerHTML = "&#8249;";
        }
        elements = document.getElementsByClassName("forward round");
        for (var i = 0; i < elements.length; i++) {
            elements[i].innerHTML = "&#8250;";
        }
    
    }

);


function myFunction(a) {
    var x = document.getElementById(a.id);
    if (x.style.display == "block") {
        x.style.display = "none";
    } else {
        x.style.display = "block";
    }
}

function checkMenuById(a) {
	var x = $(a);
	x.click();
}






