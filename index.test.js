const game = require("./index");

test("that a user can start a new game", () => {
	var knotsAndCrosses = game()
	expect(knotsAndCrosses).toEqual([[], [], []]);
});
