$(function () {
    var headerHeight = $('.navbar-fixed-top').height();
    var ourObjectsMessageSection = $('.ourObjectsMessage').height();

    if ($(window).width() > 768) {
         $('body').css({'padding-top':headerHeight+50});
         $('.donatationMessageHome').css({'height':ourObjectsMessageSection});
    }
    else {
       $('body').css({'padding-top':headerHeight});
    }
    $('body').css({'padding-top':headerHeight});

});
$(document).ready(function(){
  $("#navbar").find("li").on("click", "a", function () {
     $('.navbar-collapse.in').collapse('hide');
 });
 if ($(window).width() > 768) {
    $('.navbar-collapse.in').collapse('show');
 }
})
