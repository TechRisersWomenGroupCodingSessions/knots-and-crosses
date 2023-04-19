const { gameBoard } = require("./index");
const knotsAndCrosses = require("./index");

test("that a user can start a new ", () => {
	knotsAndCrosses.startGame();
	expect(knotsAndCrosses.getBoard()).toEqual([
		"-",
		"-",
		"-",
		"-",
		"-",
		"-",
		"-",
		"-",
		"-",
	]);
});

test("when tokens are set as [X,O], player1's token is X", () => {
	knotsAndCrosses.startGame();
	knotsAndCrosses.setPlayers(["X", "O"]);

	expect(knotsAndCrosses.player1Token).toEqual("X");
});

test("when tokens are set as [X,O], player2's token is O", () => {
	knotsAndCrosses.startGame();
	knotsAndCrosses.setPlayers(["X", "O"]);

	expect(knotsAndCrosses.player2Token).toEqual("O");
});

test("Player1 selects a first square, gameBoard has player1's token at index 0", () => {
	knotsAndCrosses.startGame();
	knotsAndCrosses.setPlayers(["X", "O"]);
	knotsAndCrosses.playerTurn(1, 0);
	// console.log(knotsAndCrosses.getBoard());
	expect(knotsAndCrosses.getBoard()).toEqual([
		"X",
		"-",
		"-",
		"-",
		"-",
		"-",
		"-",
		"-",
		"-",
	]);
});

test("Player1 select first square & Player2 selects a middle square, gameBoard has player1's token at index 0 and player2's token at index 4", () => {
	knotsAndCrosses.startGame();
	knotsAndCrosses.setPlayers(["X", "O"]);
	knotsAndCrosses.playerTurn(1, 0);
	knotsAndCrosses.playerTurn(2, 4);

	expect(knotsAndCrosses.getBoard()).toEqual([
		"X",
		"-",
		"-",
		"-",
		"O",
		"-",
		"-",
		"-",
		"-",
	]);
});

test("Player1 select filled square after Player1 @index0 & Player2 @index4", () => {
	knotsAndCrosses.startGame();
	knotsAndCrosses.setPlayers(["X", "O"]);
	knotsAndCrosses.playerTurn(1, 0);
	knotsAndCrosses.playerTurn(2, 4);
	knotsAndCrosses.playerTurn(1, 4);

	expect(knotsAndCrosses.playerTurn(1, 4)).toEqual("Square filled!");
});

test("Player2 select filled square after Player1 @index0", () => {
	knotsAndCrosses.startGame();
	knotsAndCrosses.setPlayers(["X", "O"]);
	knotsAndCrosses.playerTurn(1, 0);

	expect(knotsAndCrosses.playerTurn(2, 0)).toEqual("Square filled!");
});

test("Player1 cannot make selections when all squares are filled", () => {
	knotsAndCrosses.startGame();
	knotsAndCrosses.setPlayers(["X", "O"]);
	knotsAndCrosses.playerTurn(1, 0);
	knotsAndCrosses.playerTurn(2, 1);
	knotsAndCrosses.playerTurn(1, 2);
	knotsAndCrosses.playerTurn(2, 3);
	knotsAndCrosses.playerTurn(1, 4);
	knotsAndCrosses.playerTurn(2, 5);
	knotsAndCrosses.playerTurn(1, 6);
	knotsAndCrosses.playerTurn(2, 7);
	knotsAndCrosses.playerTurn(1, 8);

	expect(knotsAndCrosses.playerTurn(1, 0)).toContain("GAME OVER!");
});

test("Player2 cannot make selections when all squares are filled", () => {
	knotsAndCrosses.startGame();
	knotsAndCrosses.setPlayers(["X", "O"]);
	knotsAndCrosses.playerTurn(1, 0);
	knotsAndCrosses.playerTurn(2, 1);
	knotsAndCrosses.playerTurn(1, 2);
	knotsAndCrosses.playerTurn(2, 3);
	knotsAndCrosses.playerTurn(1, 4);
	knotsAndCrosses.playerTurn(2, 5);
	knotsAndCrosses.playerTurn(1, 6);
	knotsAndCrosses.playerTurn(2, 7);
	knotsAndCrosses.playerTurn(1, 8);

	expect(knotsAndCrosses.playerTurn(2, 0)).toContain("GAME OVER!");
});

test("Player must select grid on board else error", () => {
	knotsAndCrosses.startGame();
	knotsAndCrosses.setPlayers(["X", "O"]);

	expect(knotsAndCrosses.playerTurn(1, 9)).toEqual("INVALID SPACE!");
});

test("After Player 1 takes a final winning turn we specify they won", () => {
	knotsAndCrosses.startGame();
	knotsAndCrosses.setPlayers(["X", "O"]);
	knotsAndCrosses.playerTurn(1, 0);
	knotsAndCrosses.playerTurn(2, 1);
	knotsAndCrosses.playerTurn(1, 4);
	knotsAndCrosses.playerTurn(2, 3);

	expect(knotsAndCrosses.playerTurn(1, 8)).toEqual(
		"GAME OVER! Player 1 has won"
	);
});

test("After Player 2 takes a final winning turn we specify they won", () => {
	knotsAndCrosses.startGame();
	knotsAndCrosses.setPlayers(["X", "O"]);
	knotsAndCrosses.playerTurn(1, 7);
	knotsAndCrosses.playerTurn(2, 0);
	knotsAndCrosses.playerTurn(1, 1);
	knotsAndCrosses.playerTurn(2, 4);
	knotsAndCrosses.playerTurn(1, 3);

	expect(knotsAndCrosses.playerTurn(2, 8)).toEqual(
		"GAME OVER! Player 2 has won"
	);
});

test("No winner and game over - draw", () => {
	knotsAndCrosses.startGame();
	knotsAndCrosses.setPlayers(["X", "O"]);
	knotsAndCrosses.playerTurn(1, 0);
	knotsAndCrosses.playerTurn(2, 1);
	knotsAndCrosses.playerTurn(1, 2);
	knotsAndCrosses.playerTurn(2, 3);
	knotsAndCrosses.playerTurn(1, 5);
	knotsAndCrosses.playerTurn(2, 4);
	knotsAndCrosses.playerTurn(1, 6);
	knotsAndCrosses.playerTurn(2, 8);
	console.log(knotsAndCrosses.getBoard());
	expect(knotsAndCrosses.playerTurn(1, 7)).toEqual("GAME OVER! Draw");
});

test("Player 2 attempts to select square after Player 1 wins diagonally", () => {
	knotsAndCrosses.startGame();
	knotsAndCrosses.setPlayers(["X", "O"]);
	knotsAndCrosses.playerTurn(1, 0);
	knotsAndCrosses.playerTurn(2, 1);
	knotsAndCrosses.playerTurn(1, 2);
	knotsAndCrosses.playerTurn(2, 3);
	knotsAndCrosses.playerTurn(1, 4);
	knotsAndCrosses.playerTurn(2, 5);
	knotsAndCrosses.playerTurn(1, 6)

	expect(knotsAndCrosses.playerTurn(2, 7)).toEqual("GAME OVER! Player 1 has won");
});

test("Only Player 1 & 2 can take turns", () => {
	knotsAndCrosses.startGame();
	knotsAndCrosses.setPlayers(["O", "X"]);

	expect(knotsAndCrosses.playerTurn(3, 0)).toEqual("Invalid player number");
})
