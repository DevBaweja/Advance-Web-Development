$(document).ready(function()
{


    var $header = $('header'); // will take our header
    var $sticky = $header.before($header.clone().addClass("sticky"));

    $(window).on("scroll",function(){
        var scrollFromTop = $(window).scrollTop();
        $("body").toggleClass("scroll",(scrollFromTop > 350));
        console.log(scrollFromTop);
    });


});