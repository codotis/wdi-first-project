$(()=> {

  const $instructions = $('#instr');
  const $instrhide = $('.instr-popup');
  const $startgame = $('#start');
  const $lives = $('#lives');
  const $timer = $('#time');
  const $scorenumber = $('#scorenumber');
  const $flashingred = $('.flashing-red');
  const $flashingblue = $('.flashing-blue');
  const $flashinggreen = $('.flashing-green');
  const $flashingyellow = $('.flashing-yellow');
  let flashInterval = null;
  let timerCountdown = false;
  let gameRunning = false;
  let livesGameOver = null;
  let time = 10;
// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// INNER TRIANGLES RANDOMLY FLASH++++++++++++++++++++++++++++++++++++++++++++
// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
  const redFlashColors = ['red-flash-yellow', 'red-flash-red', 'red-flash-blue', 'red-flash-green'];
  const blueFlashColors = ['blue-flash-yellow', 'blue-flash-red', 'blue-flash-blue', 'blue-flash-green'];
  const greenFlashColors = ['green-flash-yellow', 'green-flash-red', 'green-flash-blue', 'green-flash-green'];
  const yellowFlashColors = ['yellow-flash-yellow', 'yellow-flash-red', 'yellow-flash-blue', 'yellow-flash-green'];

// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// INSTRUCTIONS MENU SLIDES DOWN+++++++++++++++++++++++++++++++++++++++++++++
// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

  $startgame.on('click', function() {
    $($instrhide).hide();
  });



  $startgame.on('click', function() {
    if (gameRunning === false) {
      (gameRunning = !gameRunning);
// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// INNER TRIANGLES RANDOMLY FLASH++++++++++++++++++++++++++++++++++++++++++++
// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
      flashInterval = setInterval(function(){
        const redRandomColor = redFlashColors[Math.floor(Math.random() * 4)];
        const blueRandomColor = blueFlashColors[Math.floor(Math.random() * 4)];
        const greenRandomColor = greenFlashColors[Math.floor(Math.random() * 4)];
        const yellowRandomColor = yellowFlashColors[Math.floor(Math.random() * 4)];
        $('.flashing-red').toggleClass(redRandomColor);
        $('.flashing-blue').toggleClass(blueRandomColor);
        $('.flashing-green').toggleClass(greenRandomColor);
        $('.flashing-yellow').toggleClass(yellowRandomColor);
        if (time === 1) {
          clearInterval(flashInterval);
        }
      }, 1000);
    }


    if (timerCountdown === false) {
      (timerCountdown = !timerCountdown);
      if (timerCountdown === true) {
        const timerStop = setInterval(function(){
          time--;
          $timer.html(time);
          if (time === 0) {
            clearInterval(timerStop);
          }
        }, 1000);
      }
    }



  });

// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// SCORE SYSTEM FUNCTIONALITY++++++++++++++++++++++++++++++++++++++++++++++++
// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

  let score = 0;

  function foundMatchingColors() {
    score += 1000;
    $scorenumber.html(score);
  }

// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// LIVES SYSTEM FUNCTIONALITY++++++++++++++++++++++++++++++++++++++++++++++++
// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

  let lives = 3;

  function loseALife() {
    lives -=1;
    $lives.html(lives);
  }

// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// CHECK EACH SEPARATE CORNER FOR MATCHES++++++++++++++++++++++++++++++++++++
// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

  function checkRedMatch() {
    const redMatch = $flashingred.hasClass('red-flash-red');
    if (redMatch === true) {
      foundMatchingColors();
    } else loseALife();
  }

  function checkBlueMatch() {
    const blueMatch = $flashingblue.hasClass('blue-flash-blue');
    if (blueMatch === true) {
      foundMatchingColors();
    } else loseALife();
  }

  function checkGreenMatch() {
    const greenMatch = $flashinggreen.hasClass('green-flash-green');
    if (greenMatch === true) {
      foundMatchingColors();
    } else loseALife();

  }

  function checkYellowMatch() {
    const yellowMatch = $flashingyellow.hasClass('yellow-flash-yellow');
    if (yellowMatch === true) {
      foundMatchingColors();
    } else loseALife();
  }

// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// KEY PRESSES THAT CHECK FOR COLOUR MATCH+++++++++++++++++++++++++++++++++++
// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

  $(document).keyup(function(e) {
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

//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

});
