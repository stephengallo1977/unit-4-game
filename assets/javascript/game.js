    
$(document).ready(function() {
  
  var winscount = 0;
    $("#winssection").html(" Your Wins: <h4>" + winscount + "</h4>");
  var lossescount = 0;
    $("#lossessection").html("Your Losses: <h4>" + lossescount + "</h4>");
  var currentscore = 0;
    $("#currentscorebox").html("*Your total score is the number below* <h2>" + currentscore + "</h2>")
  
  // The random number shown at the start of the game should be between 19 - 120
    var randomgoalnumber = Math.floor((Math.random() *120) + 19);
    $("#goalnumsection").html("*Your goal is to match the number below* <h2>" + randomgoalnumber + "</h2>")

// assign random value to each jewel
// Each crystal should have a random hidden value between 1 - 12.
  function jewelvalue(id) {
    $(id).data("value", Math.floor((Math.random() *12) + 1));
  }

  for (i=1; i<5; i++) {
    jewelvalue("#jewel" + i);
  }

  // determine if the score wins or loses
  function winorlose() {
    if (currentscore === randomgoalnumber) {
      winscount ++;
      $("#winssection").html("Wins: <h4>" + winscount + "</h4>");
      resetgame();
      $("#winorlosesection").html("<h5>" + "Congrats, you win!" + "</h5>");
    }
    else if (currentscore > randomgoalnumber) {
      lossescount ++;
      $("#lossessection").html("Losses: <h4>" + lossescount + "</h4>");
      resetgame();
      $("#winorlosesection").html("<h5>" + "Sorry you lost, please try again :(" + "</h5>");

    }   
  }

  // reset the values after a win or loss
  function resetgame() {
    currentscore = 0;
    $("#currentscorebox").html("Your total score is: <h2>" + currentscore + "</h2>")
    randomgoalnumber = Math.floor((Math.random() *120) + 19);
    $("#goalnumsection").html("Your goals is to match: <h2>" + randomgoalnumber + "</h2>")
    for (i=1; i<5; i++) {
      jewelvalue("#jewel" + i);
    }
  }

  //make clickable jewel images and add to score
$(".jewel img").on("click", function () {
    currentscore += $(this).data("value");
    $("#currentscorebox").html("Your total score is: <h2>" + currentscore + "</h2>");
    winorlose();
  });

});