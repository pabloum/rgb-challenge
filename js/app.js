
$(document).ready(function() {

  // initializes the game
  game();

  //enlaza el click de los círculos.
  $('.option').on("click", guess);

});

var correct;
var score = 0;

function game() {
  correct = Math.floor(Math.random() * 3);
  console.log(correct);

  $('.option').each(function(index) {
    var color = generateColor();
    $(this).css('background-color', color);

    if (index === correct) {
      $('.question').text(color);
    }
  });
}

function guess() {
  var index = $('.option').index(this);

  if (index == correct) {
    alert("Very well");
    // var score = $(".score span").text();
    ++score;
  } else {
    alert("Too bad");
    score = 0;
  }
  $(".score span").text(score);
  game();

}

function random() {
  return Math.floor(Math.random() * 255);
}

function generateColor() {
  return 'rgb(' + random() + ', ' + random() + ', ' + random() + ')';
}
