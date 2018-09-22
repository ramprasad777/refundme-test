$(function () {
    var headerHeight = $('.navbar-fixed-top').height();

    $('body').css({'padding-top':headerHeight});
    if(window.width() > 768){
      $('body').css({'padding-top':headerHeight+50});
    }else{
      $('body').css({'padding-top':headerHeight});
    }

    //Main Header navigation
    $(".modal-fullscreen").on('show.bs.modal', function () {
      setTimeout( function() {
        $(".modal-backdrop").addClass("modal-backdrop-fullscreen");
      }, 0);
    });
    $(".modal-fullscreen").on('hidden.bs.modal', function () {
      $(".modal-backdrop").addClass("modal-backdrop-fullscreen");
    });
});
