/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */

// add temporary code
// const phrase = new Phrase();
// const game = new Game();


// const phrase = new Phrase('Life is like a box of chocolates');
// console.log(`Phrase - phrase: ${phrase.phrase}`);


// const game = new Game();
// game.phrases.forEach((phrase, index) => {
// console.log(`Phrase ${index} - phrase: ${phrase.phrase}`);
// });

// const logPhrase = (phrase) => {
//     console.log(`Phrase - phrase: `, phrase.phrase);
//     };
//     const game = new Game();
//     logPhrase(game.getRandomPhrase());
//     logPhrase(game.getRandomPhrase());
//     logPhrase(game.getRandomPhrase());
//     logPhrase(game.getRandomPhrase());
//     logPhrase(game.getRandomPhrase());


// const game = new Game();
// game.getRandomPhrase().addPhraseToDisplay();
// const randomPhrase = game.getRandomPhrase();
// const phrase = new Phrase(randomPhrase.phrase);
// phrase.addPhraseToDisplay();

// const game = new Game();
// game.startGame();
// console.log(`Active Phrase - phrase: ${game.activePhrase.phrase}`);



// Declare the game variable, but don't assign it yet
let game; 
    // Add a click event listener to the "Start Game" button
document.getElementById('btn__reset').addEventListener('click', () => {
    game = new Game(); // Create a new instance of the Game class
    game.startGame(); // Start the game
});

// Add event listeners to each onscreen keyboard button
document.getElementById('qwerty').addEventListener('click', (event) => {
    if (event.target.tagName === 'BUTTON') { // Check if a button was clicked
        game.handleInteraction(event.target); // Call handleInteraction() on the clicked button
    }
});