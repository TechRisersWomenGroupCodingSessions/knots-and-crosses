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
	knotsAndCrosses.player1Turn(0);
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
	knotsAndCrosses.player1Turn(0);
	knotsAndCrosses.player2Turn(4);

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
	knotsAndCrosses.player1Turn(0);
	knotsAndCrosses.player2Turn(4);
	knotsAndCrosses.player1Turn(4);

	expect(knotsAndCrosses.player1Turn(4)).toEqual(false);
});

test("Player2 select filled square after Player1 @index0", () => {
	knotsAndCrosses.startGame();
	knotsAndCrosses.setPlayers(["X", "O"]);
	knotsAndCrosses.player1Turn(0);

	expect(knotsAndCrosses.player2Turn(0)).toEqual(false);
});
test("Players cannot make selections when all squares are filled", () => {
	knotsAndCrosses.startGame();
	knotsAndCrosses.setPlayers(["X", "O"]);
	knotsAndCrosses.player1Turn(0);
	knotsAndCrosses.player2Turn(1);
	knotsAndCrosses.player1Turn(2);
	knotsAndCrosses.player2Turn(3);
	knotsAndCrosses.player1Turn(4);
	knotsAndCrosses.player2Turn(5);
	knotsAndCrosses.player1Turn(6);
	knotsAndCrosses.player2Turn(7);
	knotsAndCrosses.player1Turn(8);

	expect(knotsAndCrosses.player2Turn(0)).toEqual(["GAME OVER!"]);
});
