const game = {
	gameBoard: ["-", "-", "-", "-", "-", "-", "-", "-", "-"],
	player1Token: "",
	player2Token: "",

	// startGame resets the game
	startGame() {
		this.gameBoard = ["-", "-", "-", "-", "-", "-", "-", "-", "-"];

		return this.gameBoard;
	},

	getBoard() {
		return this.gameBoard;
	},

	setPlayers(tokens) {
		this.player1Token = tokens[0];
		this.player2Token = tokens[1];

		return [this.player1Token, this.player2Token];
	},

	playerTurn(playerNumber, space) {
		if (space >= 0 && space < 9) {
			if (this.gameInPlay()){
				if (this.gameBoard[space] == '-') {
					if (playerNumber === 1) {
						this.gameBoard[space] = this.player1Token;
						return true;
					}
					else if (playerNumber === 2) {
						this.gameBoard[space] = this.player2Token;
						return true;
					}
					else {
						return false
					};
				}
				else {
					return false;
				}
			}
			else {
				return "GAME OVER!";
			}
		}
		else {
			return "INVALID SPACE!"
		}
	},

	gameInPlay() {
		return this.gameBoard.includes("-");
	} 
};

module.exports = game;
