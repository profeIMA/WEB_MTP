$(function() {
    $("#menu").load("menu.html");

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

// $('li.title').click(function() {
//     $('li.title').not(this).find('ul').hide();
//     $(this).find('ul').toggle();
//  });