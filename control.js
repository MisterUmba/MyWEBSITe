$(document).ready(function(){

  // Controls Size of upper picture
  $("#head").height($(window).height());

  // on Resize
  $(window).resize(function(){
      $("#head").height($(window).height());
  })

  // Downloading  the .jar files
  $("#astroidGame").click(function(e){
    e.preventDefault();
    window.location.href = "projects/Physics_Game.jar";
  });

  $("#snakeGame").click(function(e){
    e.preventDefault();
    window.location.href = "projects/HenriSnake.jar";
  });

  $("#tictactoeGame").click(function(e){
    e.preventDefault();
    window.location.href = "projects/Tic_Tac_Toe.jar";
  });


  // Randomly pic the picture
  // let pictureArray = {0:"https://www.nasa.gov/sites/default/files/thumbnails/image/iss056e201322.jpg",
  //                     1:"https://www.nasa.gov/sites/default/files/thumbnails/image/45532312914_2634bd334e_k.jpg",
  //                     2:"https://solarsystem.nasa.gov/system/resources/detail_files/17504_PIA21046_MAIN.jpg"}
  // $("#head").css("background-image","url("+pictureArray[Math.floor(Math.random()*3)]+")");
});
