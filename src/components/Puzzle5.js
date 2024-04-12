import React, { useState } from 'react';
import './Puzzle5.css'; // Ensure CSS is properly linked
import id from '../sandbox mochothon1.svg';

export default function Puzzle5({nextPuzzle}) {
    const digits = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0]; // Include 0 in the array for simplicity
    const [enteredCode, setEnteredCode] = useState("");
    const [feedback, setFeedback] = useState(""); // To display feedback on the screen
    const correctCode = "6735475";
    const displayCode = "67354##"; // Static correct answer with blurred last two digits

    const handleKeyPress = (digit) => {
        const newCode = enteredCode + digit;
        if (newCode.length <= 7) { // Prevent more than 7 digits
            setEnteredCode(newCode);
            // Check if 7 digits have been entered
            if (newCode.length === 7) {
                if (newCode === correctCode) {
                    setFeedback("Correct code! Well done!");
                    setTimeout(() => {
                        nextPuzzle();  // Call nextPuzzle after 3 seconds
                    }, 3000);  // 3000 milliseconds = 3 seconds
                } else {
                    setFeedback("Incorrect code. Try again!");
                }
                setEnteredCode(""); // Optionally reset after full entry
            }
        }
    };

    const resetInput = () => {
        setEnteredCode(""); // Reset code
        setFeedback(""); // Clear feedback
    };

    return (
        <div className="puzzle-container">
            <div className="code-display static-code">
                <span>{displayCode.substring(0, 5)}</span>
                <span className="blurred-digits">{displayCode.substring(5)}</span>
            </div>
            <div className="computer-screen">
                {digits.map((digit, index) => (
                    <button key={index} className="keypad-button" onClick={() => handleKeyPress(digit)}>
                        {digit}
                    </button>
                ))}
            </div>
            <div className="code-display">
                <span>{enteredCode}</span>
            </div>
            <p className={`feedback ${feedback.startsWith('Correct') ? 'correct' : 'incorrect'}`}>{feedback}</p>
            <button className="reset-button" onClick={resetInput}>Reset</button>
            <div className="clue-image">
                <img src={id} alt="Clue" />
            </div>
        </div>
    );
}