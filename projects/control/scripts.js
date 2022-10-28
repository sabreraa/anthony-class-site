
$("#day-btn").click(function(){

    $(".box").toggleClass("day");
    $("body").toggleClass("day");
    $(".sun").toggleClass("day");
    $(".grass").toggleClass("day");
    $(".trunk").toggleClass("day");
    $(".circle").toggleClass("day");

  });


  $("#dark-btn").click(function(){

    $(".box").toggleClass("dark");
    $("body").toggleClass("dark");
    $(".sun").toggleClass("dark");
    $(".grass").toggleClass("dark");
    $(".trunk").toggleClass("dark");
    $(".circle").toggleClass("dark");

  });


  $("#fall-btn").click(function(){

    $(".box").toggleClass("fall");
    $("body").toggleClass("fall");
    $(".sun").toggleClass("fall");
    $(".grass").toggleClass("fall");
    $(".trunk").toggleClass("fall");
    $(".circle").toggleClass("fall");
    
  });

$("#winter-btn").click(function(){

    $(".box").toggleClass("winter");
    $("body").toggleClass("winter");
    $(".sun").toggleClass("winter");
    $(".grass").toggleClass("winter");
    $(".trunk").toggleClass("winter");
    $(".circle").toggleClass("winter");
    
  });






$("#reveal-btn").click(function(){

    $(".rain").css('opacity','1');
   

  });




  $(".box").click(function(){

    $(this).hide();

  });

