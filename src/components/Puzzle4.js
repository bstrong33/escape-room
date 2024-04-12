import React, { useState } from 'react';
import './Puzzle4.css'; // Ensure CSS is properly linked

export default function Puzzle4({ nextPuzzle }) {
    const [combination, setCombination] = useState("");
    const [feedback, setFeedback] = useState("");
    const [showHints, setShowHints] = useState(false);
    const correctCombination = "4632";  // Example combination
    const hintCode1 = "Shift each digit down by 2.";
    const hintCode2 = "Shift each digit down by 3.";

    const handleInputChange = (event) => {
        setCombination(event.target.value);
    };

    const tryUnlockBriefcase = () => {
        if (combination === correctCombination) {
            setFeedback("Briefcase unlocked! Accessing documents...");
            setTimeout(() => nextPuzzle(), 3000);  // Move to the next puzzle after a delay
        } else {
            setFeedback("Incorrect combination. Try again.");
            setCombination(""); // Clear the combination input on incorrect attempt
        }
    };

    const toggleHints = () => {
        setShowHints(!showHints);
    };

    return (
        <div className="puzzle-container">
            <h2>The Spy’s Briefcase</h2>
            <p>Decode the codes to find the 4-digit combination:</p>
            <ul>
                <li>Code 1: 68 {showHints && `(${hintCode1})`}</li>
                <li>Code 2: 65 {showHints && `(${hintCode2})`}</li>
            </ul>
            <button onClick={toggleHints}>Reveal Hints</button>
            <input type="text" value={combination} onChange={handleInputChange} placeholder="Enter combination" maxLength="4" />
            <button onClick={tryUnlockBriefcase} disabled={combination === correctCombination}>Check Combination</button>
            <p className="feedbacked">{feedback}</p>
        </div>
    );
}
