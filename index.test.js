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
	knotsAndCrosses.playerTurn(0, 1);
	console.log(knotsAndCrosses.getBoard());
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
	knotsAndCrosses.playerTurn(0, 1);
	knotsAndCrosses.playerTurn(4, 2);

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
	knotsAndCrosses.playerTurn(0, 1);
	knotsAndCrosses.playerTurn(4, 2);
	knotsAndCrosses.playerTurn(4, 1);

	expect(knotsAndCrosses.playerTurn(4, 1)).toEqual(false);
});

test("Player2 select filled square after Player1 @index0", () => {
	knotsAndCrosses.startGame();
	knotsAndCrosses.setPlayers(["X", "O"]);
	knotsAndCrosses.playerTurn(0, 1);

	expect(knotsAndCrosses.playerTurn(0, 2)).toEqual(false);
});

test("Player1 cannot make selections when all squares are filled", () => {
	knotsAndCrosses.startGame();
	knotsAndCrosses.setPlayers(["X", "O"]);
	knotsAndCrosses.playerTurn(0, 1);
	knotsAndCrosses.playerTurn(1, 2);
	knotsAndCrosses.playerTurn(2, 1);
	knotsAndCrosses.playerTurn(3, 2);
	knotsAndCrosses.playerTurn(4, 1);
	knotsAndCrosses.playerTurn(5, 2);
	knotsAndCrosses.playerTurn(6, 1);
	knotsAndCrosses.playerTurn(7, 2);
	knotsAndCrosses.playerTurn(8, 1);

	expect(knotsAndCrosses.playerTurn(0, 1)).toEqual("GAME OVER!");
});

test("Player2 cannot make selections when all squares are filled", () => {
	knotsAndCrosses.startGame();
	knotsAndCrosses.setPlayers(["X", "O"]);
	knotsAndCrosses.playerTurn(0, 1);
	knotsAndCrosses.playerTurn(1, 2);
	knotsAndCrosses.playerTurn(2, 1);
	knotsAndCrosses.playerTurn(3, 2);
	knotsAndCrosses.playerTurn(4, 1);
	knotsAndCrosses.playerTurn(5, 2);
	knotsAndCrosses.playerTurn(6, 1);
	knotsAndCrosses.playerTurn(7, 2);
	knotsAndCrosses.playerTurn(8, 1);

	expect(knotsAndCrosses.playerTurn(0, 2)).toEqual("GAME OVER!");
});
