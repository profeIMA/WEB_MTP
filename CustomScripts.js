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


$(document).ready(function(){
    var butons = $(document).getElementsByClassName("BotoSolucio");
    for(var i = 0; i < butons.length(); i++)
        {
            butons[i].click(function(){
            })
        }
})

function myFunction(a) {
    var x = document.getElementById(a.id);
    console.log("El id es: " + x.id);
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}