

$(function() {
	
    $("#menu").load("../../menu.html");

    function activeNav() {
        var pgurl = window.location.href.substr(window.location.href.lastIndexOf("/")+1);
         $("#menu ul li a").each(function(){
              if($(this).attr("href") == pgurl || $(this).attr("href") == '' )
              $(this).addClass("active");
         });
    }

    setTimeout(function() {
        activeNav();
    }, 100);

});


$(document).ready(
    function(){
        document.getElementById("anyActual").innerHTML = new Date().getFullYear();
        document.getElementsByTagName("title")[0].innerHTML = "Algorismes i estructures de dades";
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




