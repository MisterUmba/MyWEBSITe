$(document).ready(function(){

  // Controls Size of upper picture
  $("#head").height($(window).height());

  // on Resize
  $(window).resize(function(){
      $("#head").height($(window).height());
  });

  // Press button to play Snake Online version
  $("#snake_game_javascript_version").click(function(e){
    e.preventDefault();
    window.location.href = "projects/snake/Snakegame.html"
  });

  // Shortest path algorithm
  $("#shortestpathbutton").click(function(e){
    e.preventDefault();
    window.location.href = "projects/ShortestPath/shortPaths.html"
  });

  // Downloading astroid game .jar files
  $("#astroidGame").click(function(e){
    e.preventDefault();
    window.location.href = "projects/Physics_Game.jar";
  });

  // Downloading KeyStroker exe file
  $("#keystroke").click(function(e){
    e.preventDefault();
    window.location.href = "projects/KeyStroke.exe";
  });

  // Snake game
  $("#snakeGame").click(function(e){
    e.preventDefault();
    window.location.href = "projects/HenriSnake.jar";
  });



  // tic tac toe game
  $("#tictactoeGame").click(function(e){
    e.preventDefault();
    window.location.href = "projects/Tic_Tac_Toe.jar";
  });

  // Make
  if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
    $("#centerAnimation").css("margin-left", "40%");
    $("#tictactoeGame").hide();
    $("#snakeGame").hide();
    $("#astroidGame").hide();
  }

  $('.nav a').on('click', function(){
    if($(window).width() <= 767)
      $('.navbar-toggle').click();
  });

});
