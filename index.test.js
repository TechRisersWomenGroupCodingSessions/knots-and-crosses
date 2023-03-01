const knotsAndCrosses = require("./index");

test("that a user can start a new ", () => {
	knotsAndCrosses.startGame();
	expect(knotsAndCrosses.getBoard()).toEqual([]);
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

	expect(knotsAndCrosses.getBoard()).toBe([
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
