$(()=> {

  const $instructions = $('#instr');
  const $startgame = $('#start');
  const $user = $('#user');
  const $lives = $('#lives');
  const $pause = $('#pause');
  const $timer = $('#time');
  const $scorenumber = $('#scorenumber');
  const $flashingred = $('.flashing-red');
  const $flashingblue = $('.flashing-blue');
  const $flashinggreen = $('.flashing-green');
  const $flashingyellow = $('.flashing-yellow');

// PLAY AROUND WITH START BUTTON+++++++++++++++++++++++++++++++++++++++++++++

  // $(document).ready(function(){
  //   $startgame.click(function(){
  //     alert('started');
  //   });
  // });


// PLAY AROUND WITH TIMER++++++++++++++++++++++++++++++++++++++++++++++++++++
  // $startgame.click(function(){
  //   let time = 5;
  //   setInterval(function() {
  //     time--;
  //     $timer.html(time);
  //     if (time < 0) {
  //       return;
  //     }
  //   }, 1000);
  // });




// INNER TRIANGLES RANDOMLY FLASH++++++++++++++++++++++++++++++++++++++++++++



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
  }, 800);

// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

  $instructions.on('click', function() {
  });

  $startgame.on('click', function() {

  });

// SCORE SYSTEM FUNCTIONALITY++++++++++++++++++++++++++++++++++++++++++++++++

  let score = 0;
  $scorenumber.html(score);

  function foundMatchingColors() {
    score += 100;
    $scorenumber.html(score);
  }

// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// LIVES SYSTEM FUNCTIONALITY++++++++++++++++++++++++++++++++++++++++++++++++
// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

  let lives = 3;
  $lives.html(lives);

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
