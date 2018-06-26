

$(function() {
    $("#menu").load("/menu.html");

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
          }
);

function myFunction(a) {
    var x = document.getElementById(a.id);
    console.log("El id es: " + x.id);
    if (x.style.display == "block") {
        x.style.display = "none";
    } else {
        x.style.display = "block";
    }
}


