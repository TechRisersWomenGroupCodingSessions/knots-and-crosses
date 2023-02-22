const knotsAndCrosses = require("./index");

test("that a user can start a new ", () => {
	knotsAndCrosses.startGame();
	expect(knotsAndCrosses.getBoard()).toEqual([]);
});

test("player one selects their token", () => {
	knotsAndCrosses.startGame();
	knotsAndCrosses.setPlayerOneToken("X");
	expect(knotsAndCrosses.getPlayerOneToken()).toEqual("X");
});
