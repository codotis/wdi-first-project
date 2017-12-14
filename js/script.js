$(()=> {

  const $instrhide = $('.instr-popup');
  const $startgame = $('#start');
  const $lives = $('#lives');
  const $timer = $('#time');
  const $restart = $('#restart')
  const $scorenumber = $('#scorenumber');
  const $flashingRed = $('.flashing-red');
  const $flashingBlue = $('.flashing-blue');
  const $flashingGreen = $('.flashing-green');
  const $flashingYellow = $('.flashing-yellow');
  let flashInterval = null;
  let timerCountdown = false;
  let gameRunning = false;
  let time = 60;
  let lives = 3;
  $('.end-popup1').css('visibility', 'hidden');
  $('.end-popup2').css('visibility', 'hidden');
// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// INNER TRIANGLES RANDOMLY FLASH++++++++++++++++++++++++++++++++++++++++++++
// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
  const redFlashColors = ['red-flash-yellow', 'red-flash-red', 'red-flash-blue', 'red-flash-green'];
  const blueFlashColors = ['blue-flash-yellow', 'blue-flash-red', 'blue-flash-blue', 'blue-flash-green'];
  const greenFlashColors = ['green-flash-yellow', 'green-flash-red', 'green-flash-blue', 'green-flash-green'];
  const yellowFlashColors = ['yellow-flash-yellow', 'yellow-flash-red', 'yellow-flash-blue', 'yellow-flash-green'];
// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// INSTRUCTIONS MENU HIDES+++++++++++++++++++++++++++++++++++++++++++++++++++
// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

  $startgame.on('click', function() {

    if (gameRunning === false) {
      (gameRunning = !gameRunning);
    }
    if (gameRunning === true) {
      $($instrhide).hide();
    }

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
    }, 500);



    if (timerCountdown === false) {
      (timerCountdown = !timerCountdown);
      if (timerCountdown === true) {
        const timerStop = setInterval(function(){
          time--;
          $timer.html(time);
          if (time === 0) {
            $('.end-popup1').html('<p>time ran out! you scored' + ' ' + $scorenumber.html() + ' ' + 'points</p>');
            $('.end-popup1').css('visibility', 'visible');
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
    if(gameRunning){
      score += 1;
      $scorenumber.html(score);
    }

  }

  $restart.on('click', function () {
    gameRunning === true;
    lives = 3;
    $lives.html(lives);
    $scorenumber.html(0);
    time = 60;
    $('.end-popup1').css('visibility', 'hidden');
    $('.end-popup2').css('visibility', 'hidden');
  });

// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// LIVES SYSTEM FUNCTIONALITY++++++++++++++++++++++++++++++++++++++++++++++++
// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++



  function loseALife() {
    if(lives > 0){
      lives -=1;
    }
    $lives.html(lives);
    if (lives === 0) {
      gameRunning = false; //newnewnew
      $('.end-popup2').html('<p>oh dear, you ran out of lives. you scored' + ' ' + $scorenumber.html() + ' ' + 'points</p>');
      $('.end-popup2').css('visibility', 'visible');
    }
  }
// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// CHECK EACH SEPARATE CORNER FOR MATCHES++++++++++++++++++++++++++++++++++++
// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

  function checkMatch(colour){
    const match = $(`.flashing-${colour}`).hasClass(`${colour}-flash-${colour}`);
    if (match && gameRunning) {
      foundMatchingColors();
    } else loseALife();
  }
// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// KEY PRESSES THAT CHECK FOR COLOUR MATCH+++++++++++++++++++++++++++++++++++
// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

  $(window).keyup(function(e) {
    e.preventDefault();
    if (e.keyCode === 37) {
      checkMatch('yellow');
    }
    if (e.keyCode === 38) {
      checkMatch('red');
    }
    if (e.keyCode === 39) {
      checkMatch('blue');
    }
    if (e.keyCode === 40) {
      checkMatch('green');
    }
  });

//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

});
