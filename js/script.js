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
    $flashingred.hasClass('.red-flash-red');
    if (checkRedMatch() === true) {
      console.log('1000');
    }
    else {
      console.log('-1');
    }
  }

  function checkBlueMatch() {
    $flashingblue.hasClass('.blue-flash-blue');
    if (checkBlueMatch() === true) {
      console.log('1000');
    }
    else {
      console.log('-1');
    }
  }

  function checkGreenMatch() {
    $flashinggreen.hasClass('.green-flash-pink');
    if (checkGreenMatch() === true) {
      console.log('1000');
    }
    else {
      console.log('-1');
    }
  }

  function checkPinkMatch() {
    $flashingpink.hasClass('.pink-flash-pink');
    if (checkPinkMatch() === true) {
      console.log('1000');
    }
    else {
      console.log('-1');
    }
  }

  checkBlueMatch();












// const isMatch = $( ".flashing-red" ).hasClass( "backgroundRed" )
// if(isMatch) {

//} else {

//}
});
