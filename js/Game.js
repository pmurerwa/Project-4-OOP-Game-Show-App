/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */

//Define the Game class
class Game {
    constructor(){
        this.missed = 0; // To track the number of missed guesses
        this.phrases = [
            new Phrase('The word became flesh'),
            new Phrase('As a man thinks so is he'),
            new Phrase('Great is thy faithfulness'),
            new Phrase('Better late than never'),
            new Phrase('Fortune favors the brave')
        ];  // Array of Phrase objects
        this.activePhrase = null; // The phrase currently in play
    }
    
    /**
     * Selects a random phrase from the phrases array and returns it.
     * @returns {Object} Phrase object chosen to be used.
     */
    getRandomPhrase() {
        const randomIndex = Math.floor(Math.random() * this.phrases.length);
        return this.phrases[randomIndex];
    }
    
    /**
     * Starts the game by hiding the start screen, selecting a random phrase, 
     * and displaying it on the board.
     */
    startGame() {
        const overlay = document.getElementById('overlay');
        overlay.style.display = 'none'; // Hide start screen

        this.activePhrase = this.getRandomPhrase(); // Get a random phrase
        this.activePhrase.addPhraseToDisplay(); // Display the phrase on the board
    }
    /**
     * Checks if the player has revealed all the letters in the phrase.
     * @returns {boolean} - True if the player has won, false otherwise.
     */
    checkForWin() {
        const hiddenLetters = document.querySelectorAll('.hide.letter');
        return hiddenLetters.length === 0; // If no hidden letters are left, player wins
    }
    /**
     * Removes a life from the scoreboard and updates the missed guesses.
     * If the player runs out of lives, ends the game.
     */
    removeLife() {
        const hearts = document.querySelectorAll('.tries img');
        hearts[this.missed].src = 'images/lostHeart.png'; // Replace live heart with lost heart
        this.missed += 1;

        if (this.missed === 5) {
            this.gameOver(false); // End the game if all lives are lost
        }
    }
    /**
     * Ends the game and displays a win or loss message.
     * @param {boolean} win - Whether the player won or lost.
     */
    gameOver(win) {
        const overlay = document.getElementById('overlay');
        const message = document.getElementById('game-over-message');

        overlay.style.display = 'flex'; // Show the overlay again

        if (win) {
            overlay.className = 'win'; // Set class to 'win'
            message.textContent = 'Congratulations, you won!';
        } else {
            overlay.className = 'lose'; // Set class to 'lose'
            message.textContent = 'Sorry, better luck next time!';
        }

        // Reset missed guesses
        this.missed = 0;

        // Reset hearts
        const hearts = document.querySelectorAll('.tries img');
        hearts.forEach(heart => heart.src = 'images/liveHeart.png');
    }
    /**
     * Handles the player's interaction with the onscreen keyboard.
     * Disables the selected button and checks whether the guessed letter is in the phrase.
     * @param {Object} button - The clicked button element
     */
    handleInteraction(button) {
        button.disabled = true; // Disable the selected button
        console.log(button);

        const letter = button.textContent;
        if (this.activePhrase.checkLetter(letter)) {
            button.classList.add('chosen'); // Add 'chosen' class if correct
            this.activePhrase.showMatchedLetter(letter); // Show matched letter
            if (this.checkForWin()) {
                this.gameOver(true); // If player wins
            }
        } else {
            button.classList.add('wrong'); // Add 'wrong' class if incorrect
            this.removeLife(); // Remove a life
        }
    }
}
