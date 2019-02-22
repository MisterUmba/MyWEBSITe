$(document).ready(function(){
  // $("#btn1").click(function(){
  //   $("#test1").text("Height"+$("test1").innerHeight);
  // });
  // $("#btn2").click(function(){
  //   $("#test2").html("<b>Hello world!</b>");
  // });
  // $("#btn3").click(function(){
  //   $("#test3").val("Dolly Duck");
  // });

  //let head = $("#head");

  // Controls Size of upper picture
  $("#head").height($(window).height());

  // on Resize
  $(window).resize(function(){
      $("#head").height($(window).height());
  })

  // Location of title and subtitle
  //$("#title").css("margin-top", Math.floor($(window).height()*(1/4)));

  // Randomly pic the picture
  // let pictureArray = {0:"https://www.nasa.gov/sites/default/files/thumbnails/image/iss056e201322.jpg",
  //                     1:"https://www.nasa.gov/sites/default/files/thumbnails/image/45532312914_2634bd334e_k.jpg",
  //                     2:"https://solarsystem.nasa.gov/system/resources/detail_files/17504_PIA21046_MAIN.jpg"}
  // $("#head").css("background-image","url("+pictureArray[Math.floor(Math.random()*3)]+")");
});
