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

	player1Turn(space) {
		if (this.gameBoard[space] == '-') {
			this.gameBoard[space] = this.player1Token;
			return true;
		}
		else {
			return false;
		}
	},

	player2Turn(space) {
		if (this.gameBoard[space] == '-') {
			this.gameBoard[space] = this.player2Token;
			return true;
		}
		else {
			return false;
		}
	},
};

module.exports = game;
