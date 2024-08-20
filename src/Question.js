// src/Question.js
export class Question {
    constructor(title, choices) {
        console.log("TITLE " + typeof(title))
        console.log("CHOICES " + typeof(choices))

      if (choices.length !== 4) {
        throw new Error('Choices array must contain exactly 4 items.');
      }
      this.title = title;  // Renamed from question to title
      this.choices = choices; // An array of 4 possible answers
    }
  }
  