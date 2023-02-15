const game = require("./index");

test("that a user can start a new game", () => {
	const knotsAndCrosses = game.startGame();
	expect(knotsAndCrosses).toEqual([]);
});

test("player one selects their token", () => {
	const knotsAndCrosses = game.startGame();

	expect(knotsAndCrosses).toEqual([]);
});
