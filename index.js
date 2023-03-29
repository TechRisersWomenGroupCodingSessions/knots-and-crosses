const game = {
	gameBoard: ["-", "-", "-", "-", "-", "-", "-", "-", "-"],
	winningPatterns: [[0, 4, 8], [0, 1, 2], [0, 3, 6], [1, 5, 7], [2, 5, 8], [2, 4, 6], [3, 4, 5], [6, 7, 8]],
	player1Token: "",
	player2Token: "",
	score: "", 


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

	gameOver() {
		for (pattern of this.winningPatterns) {
			if (this.gameBoard[pattern[0]] === this.player1Token
				&& this.gameBoard[pattern[1]] === this.player1Token 
				&& this.gameBoard[pattern[2]] === this.player1Token) {
					this.score = "GAME OVER! Player 1 has won";
					return true;
			}
			
			if (this.gameBoard[pattern[0]] === this.player2Token
				&& this.gameBoard[pattern[1]] === this.player2Token 
				&& this.gameBoard[pattern[2]] === this.player2Token) {
					this.score = "GAME OVER! Player 2 has won";
					return true;
			}
		}
		
		if (!this.gameInPlay() && this.score === "") {
			this.score = "GAME OVER! Draw";
			return true;
		}

		return false;
	},

	playerTurn(playerNumber, space) {
		if (space >= 0 && space < 9) {
			if (this.gameInPlay()){
				if (this.gameBoard[space] == '-') {
					if (playerNumber === 1) {
						this.gameBoard[space] = this.player1Token;
						if (this.gameOver()) {
							console.log("Score:" + this.score);
							return this.score;
						} 
					}
					else if (playerNumber === 2) {
						this.gameBoard[space] = this.player2Token;
						if (this.gameOver()) {
							console.log("Score:" + this.score);
							return this.score;
						} 
					}
					else {
						return "Invalid player number";
					};
				}
				else {
					return "Square filled!";
				}
			}
			else {
				return "GAME OVER! No moves left. Score: " + this.score;
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
