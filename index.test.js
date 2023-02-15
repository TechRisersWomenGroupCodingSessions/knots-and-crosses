const game = require("./index");

test("that a user can start a new game", () => {
	game.startGame();
	expect(game.getBoard()).toEqual([]);
});

// test("player one selects their token", () => {
// 	const knotsAndCrosses = game;

// 	expect(knotsAndCrosses).toEqual([]);
// });
