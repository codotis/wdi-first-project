$(()=> {

  const $instructions = $('#instr');
  const $startgame = $('#start');
  const $user = $('#user');
  const $lives = $('#lives');
  const $pause = $('#pause');
  const $scorenumber = $('#scorenumber');
  const $flashingred = $('.flashing-red');
  const $flashingblue = $('.flashing-blue');
  const $flashinggreen = $('.flashing-green');
  const $flashingyellow = $('.flashing-yellow');


  const redFlashColors = ['red-flash-yellow', 'red-flash-red', 'red-flash-blue', 'red-flash-green'];
  const blueFlashColors = ['blue-flash-yellow', 'blue-flash-red', 'blue-flash-blue', 'blue-flash-green'];
  const greenFlashColors = ['green-flash-yellow', 'green-flash-red', 'green-flash-blue', 'green-flash-green'];
  const yellowFlashColors = ['yellow-flash-yellow', 'yellow-flash-red', 'yellow-flash-blue', 'yellow-flash-green'];


  setInterval(function(){
    const redRandomColor = redFlashColors[Math.floor(Math.random() * 4)];
    const blueRandomColor = blueFlashColors[Math.floor(Math.random() * 4)];
    const greenRandomColor = greenFlashColors[Math.floor(Math.random() * 4)];
    const yellowRandomColor = yellowFlashColors[Math.floor(Math.random() * 4)];
    $('.flashing-red').toggleClass(redRandomColor);
    $('.flashing-blue').toggleClass(blueRandomColor);
    $('.flashing-green').toggleClass(greenRandomColor);
    $('.flashing-yellow').toggleClass(yellowRandomColor);
  }, 200);


  $instructions.on('click', function() {
  });

  $startgame.on('click', function() {

  });

  function checkRedMatch() {
    const redMatch = $flashingred.hasClass('red-flash-red');
    if (redMatch === true) {
      score();
    }
  }

  function checkBlueMatch() {
    const blueMatch = $flashingblue.hasClass('blue-flash-blue');
    if (blueMatch === true) {
      score();
    }
  }

  function checkGreenMatch() {
    const greenMatch = $flashinggreen.hasClass('green-flash-green');
    if (greenMatch === true) {
      score();
    }

  }

  function checkYellowMatch() {
    const yellowMatch = $flashingyellow.hasClass('yellow-flash-yellow');
    if (yellowMatch === true) {
      score();
    }
  }



  $(document).keydown(function(e) {
    if (e.keyCode === 37) {
      e.preventDefault();
      checkYellowMatch();
    }
    if (e.keyCode === 38) {
      e.preventDefault();
      checkRedMatch();
    }
    if (e.keyCode === 39) {
      e.preventDefault();
      checkBlueMatch();
    }
    if (e.keyCode === 40) {
      e.preventDefault();
      checkGreenMatch();
    }
  });

  function score() {
    let playerScore = $scorenumber.text();


  }














});
