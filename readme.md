# General Assembly, Project #1: The Game

For my first project assignment as a WDI student at General Assembly I was tasked with creating my own game. After sketching some rough ideas on <https://sketchboard.io/> I settled for this! My goal was to create a game that requires high concentration, high reaction speed and that has a great replay value.

# ![](https://i.imgur.com/y5gQWoU.jpg)



## Check out Colour Tap

Play Colour Tap, hosted on [this Heroku link](https://shrouded-everglades-90472.herokuapp.com/).

Check out the source code on my [github repository](https://github.com/codotis/wdi-first-project)

## Built using
* HTML5  
* CSS  
* JavaScript ES6  
* jQuery  
* Git  
* Heroku

## Contact
Email me at : <codotis@gmail.com>  

Follow my CodePen: <https://codepen.io/codotis/>

Follow my github: <https://github.com/codotis>

## Successes
What I enjoyed most about this project was having a chance to put all I've learnt into practice! Although at first I was 

## Challenges
One of my biggest challenges during this project was fixing what seemed like an endless chain of bugs. Once I had the game logic working, small but significant elements of my game would break. From a `setInterval` triggering with every click, to being able to get an endless score even if the game was no longer running. I managed to fix the majority of these bugs by refactoring a few of my JavaScript functions. For example my `setInterval` would trigger with every click because it did not have its own function, so I was unable to clear the interval outside of the `setInterval`. By refactoring and giving it its own function, I was able to call `clearInterval` on a global scope, and stop the interval running with every click. 


## Improvements
There are several improvements I can think of that could make for great future updates! Here's a few of them:-

* Add sound when matches are found/lives are lost
* Add a multiplayer mode with high scores
* Add higher difficulty settings, increasing the flash rate for triangles
* Add different coloured triangle themes
* Add different shapes and themes (for example, could match circles/animals/numbers)
* Make my game responsive