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

/**
     * Resets the gameBoard by:
     * - Removing all letter placeholders from the phrase display
     * - Resetting the onscreen keyboard buttons
     * - Resetting the player's lives (hearts)
     */
function resetGameBoard() {
    // Remove all li elements from the Phrase ul element
    const phraseUl = document.querySelector('#phrase ul');
    phraseUl.innerHTML = ''; // Clears the current phrase

    // Reset all onscreen keyboard buttons
    const keys = document.querySelectorAll('#qwerty button');
    keys.forEach((key) => {
        key.className = 'key'; // Set each button back to the 'key' class
        key.disabled = false; // Enable all buttons
    });

    // Reset the hearts (lives) to liveHeart.png
    const hearts = document.querySelectorAll('.tries img');
    hearts.forEach(heart => {
        heart.src = 'images/liveHeart.png'; // Restore each heart to the live heart image
    });
}
    // Add a click event listener to the "Start Game" button
document.getElementById('btn__reset').addEventListener('click', () => {
    resetGameBoard(); // Reset the gameBoard before starting a new game
    game = new Game(); // Create a new instance of the Game class
    game.startGame(); // Start the game
});

// Add event listeners to each onscreen keyboard button
document.getElementById('qwerty').addEventListener('click', (event) => {
    if (event.target.tagName === 'BUTTON') { // Check if a button was clicked
        game.handleInteraction(event.target); // Call handleInteraction() on the clicked button
    }
});

/**
 * Exceeds Expectations
 * Adds keyboard functionality to allow players to use their physical keyboard to guess letters.
 */
document.addEventListener('keydown', (event) => {
    const pressedKey = event.key.toLowerCase(); // Get the pressed key and convert to lowercase
    const keys = document.querySelectorAll('#qwerty button');
    
    // Loop through the onscreen keys to find the corresponding key
    keys.forEach(key => {
        if (key.textContent === pressedKey && !key.disabled) {
            game.handleInteraction(key); // Call handleInteraction() if the key is not disabled
        }
    });
});