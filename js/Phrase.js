/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Phrase.js */

// Define the Phrase class
class Phrase {
    constructor (phrase) { // Constructor to initialize the Phrase object
        this.phrase = phrase.toLowerCase(); // Set the phrase property, convert it to lowercase
    }
    /**
     * Adds letter placeholders to the display when the game starts.
     * Each letter is represented by an empty box, one li element for each letter.
     */
    addPhraseToDisplay() {
        const phraseDisplay = document.querySelector('#phrase ul'); // Selects the ul element where the phrase will be displayed
        phraseDisplay.innerHTML = ''; // Clears any previous content

        // Loop through each character in the phrase
        for (let char of this.phrase) {
            const li = document.createElement('li'); // Creates a list item for each character

            if (char === ' ') {
                li.className = 'space'; // Adds the 'space' class for spaces
            } else {
                li.className = `hide letter ${char}`; // Adds 'hide' and 'letter' classes for each letter
                li.textContent = char; // Sets the text content to the character
            }

            phraseDisplay.appendChild(li); // Adds the list item to the display
        }
    }
    /**
     * Checks if the letter selected by the player matches a letter in the phrase.
     * @param {string} letter - The letter to check
     * @returns {boolean} - Returns true if the letter is in the phrase, false otherwise
     */
    checkLetter(letter) {
        return this.phrase.includes(letter);
    }
    /**
     * Reveals the letter(s) on the board that matches the player's selection.
     * Replaces the 'hide' CSS class with 'show' for the matched letter(s).
     * @param {string} letter - The letter to reveal
     */
    showMatchedLetter(letter) {
        // Select all elements with the matching letter and hide class
        const matchingLetters = document.querySelectorAll(`.hide.letter.${letter}`);

        // Loop through the matching letters and replace the 'hide' class with 'show'
        matchingLetters.forEach((li) => {
            li.classList.replace('hide', 'show');
        });
    }
    

}   
