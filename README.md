## Tic Tac Toe

### Specification
The rules of tic-tac-toe are as follows:

* There are two players in the game (X and O)
* Players take turns until the game is over
* A player can claim a field if it is not already taken
* A turn ends when a player claims a field
* A player wins if they claim all the fields in a row, column or diagonal
* A game is over if a player wins
* A game is over when all fields are taken

Build the business logic for a game of tic tac toe. It should be easy to implement a working game of tic tac toe by combining your code with any user interface, whether web or command line.

### User Stories
```
As a player,
So that I have some healthy competition
I want to play with another player.

As a player,
So that the game is just
I want to take turns while playing it.

As a player,
So that other players gets his turn
I want my turn to end when I claim a field.

As a player,
So that I don't override the other player's move
I want to claim a grid's field that is not already claimed.

As a player,
So that there is a clear winner
I want to win if I claim all fields in a row, column or diagonal.

As a player,
So that I can finish a game
I want the game to end when a player wins or all grid's fields are claimed.
```
### Programming language used
- JavaScript

### Installation and Use
- Clone this repo
- Move into the folder
- open SpecRunner.html to test.
- FeatureSpec.js demonstrates what interface the application provides and its use.
