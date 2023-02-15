const game = require("./index");

test("that a user can start a new game", () => {
	expect(game.startGame()).toBe([[], [], []]);
});
