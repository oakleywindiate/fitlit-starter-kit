# Fitlit Activity Tracker

## Overview

Feeling nostalgic for old games? Then look no further than the classic tic-tac-toe you know and love!

This two player game offers an interactive board complete with your very own character. Play as an alien or a spaceship, and be prepared to fight it out with this classic head-to-head matchup!

## Project Motivation

The fitlit project is a kinesthetic learning activity that teaches developers how to work with a team as well as how to create interactive and functional web pages using JavaScript, CSS, and HTML.

***
## Project Information

#### Code Style & Framework
* JavaScript
* HTML
* CSS
* Webpack
* Chart.js

#### Features
* User Profile
* User Friends
* Compare step goals
* Water Intake
* Activity Tracker

#### Code Sample
The following is one example of code that played an integral role in our webpage:
```javascript
function setEmoji(e) {
  var boardIndex = e.target.id - 1;
  var currentPlayerIndex = game.turn - 1;
  var currentPlayer = game.players[currentPlayerIndex];
  if (game.gameBoard[boardIndex] === null) {
    game.gameplay(boardIndex, currentPlayer)
    e.target.classList += ` ${currentPlayer.emoji}`;
  }
}
```

### Installation

1. To edit this repo, fork and clone it to your local
2. `cd` into repository
3. Open in text editor
4. To view webpage, run the command `open index.html` in your terminal

### Credits

This project was created by Turing School of Software and Design, a Colorado Non-Profit Organization.

Interested in learning more about Turing? [click here](https://turing.edu/)
