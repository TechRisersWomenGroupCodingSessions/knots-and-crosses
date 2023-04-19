# knots-and-crosses

- A session/game is started - build the grid single array 0-8 corresponding L-R,T-B (DONE)
- Player 1 selects their token (ex. X / O) (DONE)
- Player 1 takes a valid turn (DONE)
- Player 2 takes a valid turn (DONE)
- Player1 makes invalid selection (already filled square) (DONE)
- Player2 makes invalid selection (already filled square) (DONE)
- Players cannot make selections when all squares are filled (DONE)
- refactor player turns into one function. (DONE)
- Player must select grid on board else error (DONE)
- Game contains a winning pattern (Verify that 3 tokens in a row wins the game) (DONE)
- When game is over specify if winning game or not (DONE)
- Players cannot make selections when Game ends (draw) (DONE)
- Game contains no winning pattern (DONE)
- When game ends scored is displayed (DONE)
- A new game in session is started (reset game) (DONE)
- Only Player 1 & 2 can take turns (DONE)

- Set up game interface
    - Add html page (DONE)
    - Add gameboard grid (div) to page (DONE)
    - Add attribute Id to grid spaces (divs) (DONE)
    - Add attribute onclick to grid spaces for player selection call (DONE)
    - Add onclick function code to take player turn
    - Add onclick call to update html grid spaces after turn
    - Add functionality to onclick to ignore square selection when game over
    - Add active player and score identifiers
    - Add player token assignment/selector on page
    - Add button to restart game
