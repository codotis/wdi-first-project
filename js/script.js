$(()=> {

  const $instructions = $('#instr');
  const $startgame = $('#start');
  const $user = $('#user');
  const $lives = $('#lives');
  const $pause = $('#pause');
  const $score = $('#score');
  const $staticred = $('.static-red');
  const $staticblue = $('.static-blue');
  const $staticgreen = $('.static-green');
  const $staticpink = $('.static-pink');
  const $flashingred = $('.flashing-red');
  const $flashingblue = $('.flashing-blue');
  const $flashinggreen = $('.flashing-green');
  const $flashingpink = $('.flashing-pink');


  const redFlashColors = ['red-flash-pink', 'red-flash-red', 'red-flash-blue', 'red-flash-green'];
  const blueFlashColors = ['blue-flash-pink', 'blue-flash-red', 'blue-flash-blue', 'blue-flash-green'];
  const greenFlashColors = ['green-flash-pink', 'green-flash-red', 'green-flash-blue', 'green-flash-green'];
  const pinkFlashColors = ['pink-flash-pink', 'pink-flash-red', 'pink-flash-blue', 'pink-flash-green'];

  setInterval(function(){
    const redRandomColor = redFlashColors[Math.floor(Math.random() * 4)];
    $('.flashing-red').toggleClass(redRandomColor);
  }, 1000);

  setInterval(function(){
    const blueRandomColor = blueFlashColors[Math.floor(Math.random() * 4)];
    $('.flashing-blue').toggleClass(blueRandomColor);
  }, 1000);

  setInterval(function(){
    const greenRandomColor = greenFlashColors[Math.floor(Math.random() * 4)];
    $('.flashing-green').toggleClass(greenRandomColor);

  }, 1000);

  setInterval(function(){
    const pinkRandomColor = pinkFlashColors[Math.floor(Math.random() * 4)];
    $('.flashing-pink').toggleClass(pinkRandomColor);
  }, 1000);


  $instructions.on('click', function() {
  });

  $startgame.on('click', function() {

  });

  function checkRedMatch() {
    const redMatch = $flashingred.hasClass('.red-flash-red');
    if (redMatch === true) {
      console.log('1000');
    }
  }

  function checkBlueMatch() {
    const blueMatch = $flashingblue.hasClass('.blue-flash-blue');
    if (blueMatch === true) {
      console.log('1000');
    }
  }

  function checkGreenMatch() {
    const greenMatch = $flashinggreen.hasClass('.green-flash-green');
    if (greenMatch === true) {
      console.log('1000');
    }
  }

  function checkPinkMatch() {
    const pinkMatch = $flashingpink.hasClass('.pink-flash-pink');
    if (pinkMatch === true) {
      console.log('1000');
    }
  }

  $(document).keydown(function(e) {
    if (e.keyCode === 37) {
      checkPinkMatch();
    }
    if (e.keyCode === 38) {
      checkRedMatch();
    }
    if (e.keyCode === 39) {
      checkBlueMatch();
    }
    if (e.keyCode === 40) {
      checkGreenMatch();
    }
  });


















});
