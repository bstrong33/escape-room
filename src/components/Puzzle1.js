import React, { useState } from "react";
import './Puzzle1.css'; // Import CSS file for styling

export default function Puzzle1({ nextPuzzle }) {
    const [submission, setSubmission] = useState("");
    const [feedback, setFeedback] = useState(""); // Feedback to the user
    const correctAnswer = 11; // Defined as a constant since it doesn't change

    function handleTextChange(event) {
        setSubmission(event.target.value);
    }

    function handleSubmit() {
        // Convert submission to a number and check if it matches the correct answer
        if (parseInt(submission) === correctAnswer) {
            setFeedback("Correct! Well done!");
            nextPuzzle();
        } else {
            setFeedback("Incorrect, try again!");
        }
    }

    return (
        <div className="puzzle">
            <h2>Decipher the Code</h2>
            <p className="puzzle-description">I am the sum of two numbers,</p>
            <p className="puzzle-description">Both smaller than ten</p>
            <p className="puzzle-description">But when you add them together</p>
            <p className="puzzle-description">I become a double-digit friend</p>
            <p className="puzzle-question">What number am I?</p>
            <input
                type="text"
                placeholder="Answer"
                className="puzzle-input"
                name="Answer"
                value={submission}
                onChange={handleTextChange}
                onKeyPress={event => event.key === 'Enter' && handleSubmit()} // Handle Enter key press
            />
            <button className="puzzle-button" onClick={handleSubmit}>Submit</button> {/* Submit button */}
            {feedback && <p className="feedback">{feedback}</p>} {/* Feedback display */}
        </div>
    );
}