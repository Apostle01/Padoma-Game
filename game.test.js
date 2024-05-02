/**
 * @jest-environment jsdom
 */

// Importing necessary modules
const { game } = require("../src/game");

// Test to ensure jsdom is working
test('use jsdom in this test file', () => {
    const element = document.createElement('div');
    expect(element).not.toBeNull();
});

// Setting up before all tests
beforeAll(() => {
    let fs = require("fs");
    let fileContents = fs.readFileSync("index.html", "utf-8");
    document.open();
    document.write(fileContents);
    document.close();
});

// Test suite to check the correctness of the game object
describe("game object contains correct keys", () => {
    // Test to check if the 'score' key exists in the game object
    test("score key exists", () => {
        expect("score" in game).toBe(true);
    });
});
test("currentGame key exist", () => {
    expect("currentGame" in game).toBe(true)
})
test("playerMoves key exists", () => {
    expect("playerMoves" in game).toBe(true);
});
test("choices key exists", () => {
    expect("choices" in game).toBe(true);
});
test("choices contain correct ids", () => {
    expect(game.choices).toEqual(["button1", "button2", "button3", "button4"]);
});

