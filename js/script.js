$(()=> {

  const $instr = $('.instr-popup');
  const $startgame = $('#start');
  const $lives = $('#lives');
  const $timer = $('#time');
  const $restart = $('#restart');
  const $scorenumber = $('#scorenumber');
  // ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
  // CONSTANTS FOR INNER TRIANGLES RANDOMLY FLASHING+++++++++++++++++++++++++++
  // ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
  const redFlashColors = ['red-flash-yellow', 'red-flash-red', 'red-flash-blue', 'red-flash-green'];
  const blueFlashColors = ['blue-flash-yellow', 'blue-flash-red', 'blue-flash-blue', 'blue-flash-green'];
  const greenFlashColors = ['green-flash-yellow', 'green-flash-red', 'green-flash-blue', 'green-flash-green'];
  const yellowFlashColors = ['yellow-flash-yellow', 'yellow-flash-red', 'yellow-flash-blue', 'yellow-flash-green'];
  let gameRunning = false;
  let time = 60;
  let lives = 3;
  let score = 0;
  $('.end-popup1').css('visibility', 'hidden');
  $('.end-popup2').css('visibility', 'hidden');
  // +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
  // FLASH SMALL TRIANGLES --- ON START CLICK FUNCTION++++++++++++++++++++++++
  // +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
  function flashInterval(){
    if (gameRunning) {
      const interval = setInterval(function(){
        const redRandomColor = redFlashColors[Math.floor(Math.random() * 4)];
        const blueRandomColor = blueFlashColors[Math.floor(Math.random() * 4)];
        const greenRandomColor = greenFlashColors[Math.floor(Math.random() * 4)];
        const yellowRandomColor = yellowFlashColors[Math.floor(Math.random() * 4)];
        $('.flashing-red').toggleClass(redRandomColor);
        $('.flashing-blue').toggleClass(blueRandomColor);
        $('.flashing-green').toggleClass(greenRandomColor);
        $('.flashing-yellow').toggleClass(yellowRandomColor);
        if (time === 1) {
          clearInterval(interval);
        }
      }, 500);
    }
  }

  function countdown(){
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


  // ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
  // 1. HIDE INSTRUCTIONS --- ON START CLICK FUNCTION++++++++++++++++++++++++++
  // ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
  $startgame.on('click', function() {
    gameRunning = true;
    if (gameRunning) {
      $instr.hide();
    }
    countdown();
    flashInterval();
    $startgame.off('click'); //RUN ONCE
  });

  // ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
  // 3. START TIMER COUNTDOWN --- ON START CLICK FUNCTION++++++++++++++++++++
  // ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++



  // ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
  // SCORE SYSTEM FUNCTIONALITY++++++++++++++++++++++++++++++++++++++++++++++++
  // ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++


  function foundMatchingColors() {
    if(gameRunning){
      score += 1;
      $scorenumber.html(score);
    }

  }
  // if (time === 0 || lives === 0) {
  $restart.on('click', function () {
    gameRunning = true;
    lives = 3;
    $lives.html(lives);
    $scorenumber.html(0);
    time = 60;
    $timer.html(60);
    countdown();
    flashInterval();
    $('.end-popup1').css('visibility', 'hidden');
    $('.end-popup2').css('visibility', 'hidden');
  });
  // }
  // ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
  // LOSE A LIFE FUNCTIONALITY+++++++++++++++++++++++++++++++++++++++++++++++++
  // ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
  function loseALife() {
    if(lives > 0 && gameRunning){
      lives -=1;
    }
    $lives.html(lives);
    if (lives === 0) {
      gameRunning = false;
      $('.end-popup2').html('<p>oh dear, you ran out of lives. you scored' + ' ' + $scorenumber.html() + ' ' + 'points</p>');
      $('.end-popup2').css('visibility', 'visible');
    }
  }
  // ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
  // CHECK FLASHING TRIANGLES FOR MATCHES. MATCH = +SCORE. NO MATCH = -LIFE++++
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
});
