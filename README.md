```text
 _   _  _   _  __  __  ____   _____  ____  
| \ | || | | ||  \/  || __ ) | ____||  _ \ 
|  \| || | | || |\/| ||  _ \ |  _|  | |_) |
| |\  || |_| || |  | || |_) || |___ |  _ < 
|_| \_| \___/ |_|  |_||____/ |_____||_| \_\

        ?  GUESS  THE  SECRET  NUMBER  ?
     ----------------------------------------
           Too High... Too Low... Got it!
```

# 🎯 Number Guessing Challenge

A simple browser-based game where the computer picks a secret number and the player has to guess it within a limited number of attempts. Built with plain HTML, CSS and JavaScript, with no frameworks or libraries.

## 🎮 How to Play

1. Choose a difficulty level and click **Start Game**.
2. Enter a number within the given range and click **Submit Guess**.
3. The game tells you whether your guess is **Too High** or **Too Low**.
4. Guess the number before your attempts run out.
5. Click **Play Again** to start a new round.

## ✨ Features

- Start screen with game description and rules
- Random secret number generated for every new game
- Input validation with error messages for invalid guesses
- "Too High" / "Too Low" hints after every guess
- Limited attempts with a live remaining-attempts counter
- Three difficulty levels
- Score calculation based on how quickly you guess
- Result screen that reveals the secret number, attempts used and score
- Best score tracking for the current browser session
- Win and lose animations
- Responsive layout for laptops, tablets and mobile devices

## ⚙️ Difficulty Levels

| Difficulty | Number Range | Attempts |
|------------|--------------|----------|
| Easy       | 1–50         | 10       |
| Medium     | 1–100        | 7        |
| Hard       | 1–200        | 5        |

## 🏆 Scoring

- A correct guess scores `(attempts left + 1) × 10`, so fewer guesses means a higher score.
- Running out of attempts scores 0.

## 📁 Project Structure

```
├── index.html   # Page structure (start, game and result screens)
├── style.css    # Styling, colours and animations
├── app.js       # Game logic, hints, attempts and scoring
└── README.md
```

## 🚀 How to Run

1. Clone the repository:
   ```bash
   git clone <repository-url>
   ```
2. Open the project folder.
3. Open `index.html` in any modern web browser (Chrome, Edge, Firefox, etc.).

No installation or build step is required.

## 🛠️ Tech Stack

- HTML5
- CSS3
- JavaScript (Vanilla)

## 👥 Team

| Member | Contribution |
|--------|--------------|
| Shriyam Gupta | HTML structure, game screens and input fields |
| Ansh Raj | CSS styling, game design and animations |
| Saksham Hada | JavaScript logic: random number generation, hints, attempts and score calculation |

## 📌 Note

This project was built as a mini project for **Bosscoder School of Technology**.
