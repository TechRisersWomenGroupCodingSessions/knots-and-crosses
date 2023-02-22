const game = {
	gameBoard: [],
	player1: "",
	player2: "",

	// startGame resets the game
	startGame() {
		this.gameBoard = [];

		return this.gameBoard;
	},

	getBoard() {
		return this.gameBoard;
	},

	setPlayers(token) {
		this.players[0] = token;
		return this.players;
	},
};

module.exports = game;
