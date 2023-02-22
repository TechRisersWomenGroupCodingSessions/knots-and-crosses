const game = {
	gameBoard: [],
	// startGame resets the game
	startGame() {
		this.gameBoard = [];

		return this.gameBoard;
	},

	getBoard() {
		return this.gameBoard;
	}
	
};

module.exports = game;
