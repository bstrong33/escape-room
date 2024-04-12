import React, { useState } from "react";
import './Puzzle3.css';

// Import images for each vending slot
import chips from '../Vending Machine/Chips.jpg';
import dew from '../Vending Machine/dew.jpeg';
import dewWebp from '../Vending Machine/dew.webp';
import dews from '../Vending Machine/dews.jpeg';
import doritos from '../Vending Machine/doritos.jpeg';
import goldfish from '../Vending Machine/goldfish.jpeg';
import lays from '../Vending Machine/lays.png';
import straws from '../Vending Machine/straws.jpeg';
import twix from '../Vending Machine/twix.jpeg';

export default function Puzzle3({ nextPuzzle }) {
    const [code, setCode] = useState("");
    const items = [
        { code: 'A1', img: chips },
        { code: 'A2', img: dew },
        { code: 'A3', img: dewWebp },
        { code: 'B1', img: dews },
        { code: 'B2', img: doritos },
        { code: 'B3', img: goldfish },
        { code: 'C1', img: lays },
        { code: 'C2', img: straws },
        { code: 'C3', img: twix }
    ];
    const letters = ['A', 'B', 'C'];
    const numbers = [1, 2, 3];

    const handleButtonClick = (value) => {
        const newCode = code + value;
        if (newCode.length === 2) {
            if (newCode === 'B3') {
                nextPuzzle();
            } else {
                setCode("");
                alert("Incorrect code, try again!"); // Optionally use a more subtle feedback mechanism
            }
        } else {
            setCode(newCode);
        }
    };

    return (
        <div className="vending-machine">
            <div className="vending-header">
                <p>Which Snack Responds To Your Smile??</p>
            </div>
            <div className="vending-grid">
                {items.map(item => (
                    <div key={item.code} className="vending-slot">
                        <img src={item.img} alt={item.code} className="vending-image" />
                        <div className="vending-code">{item.code}</div>
                    </div>
                ))}
            </div>
            <div className="code-input">
                <div className="code-buttons">
                    {letters.map(letter => (
                        <button key={letter} className="button" onClick={() => handleButtonClick(letter)}>
                            {letter}
                        </button>
                    ))}
                </div>
                <div className="code-buttons">
                    {numbers.map(number => (
                        <button key={number} className="button" onClick={() => handleButtonClick(number.toString())}>
                            {number}
                        </button>
                    ))}
                </div>
            </div>
            <div className="entered-code-display">
                <p>Entered Code: {code}</p>
            </div>
        </div>
    );
}