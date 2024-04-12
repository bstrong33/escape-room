import React, { useEffect, useState } from 'react';

export default function Puzzle2({ nextPuzzle }) {
    const [number, setNumber] = useState(33);

    useEffect(() => {
        // Set a timer to transition to the next puzzle after 2 seconds
        const timer = setTimeout(() => {
            nextPuzzle();
        }, 1000); // 2000 milliseconds = 2 seconds

        // Clean up the timer if the component unmounts before the timer goes off
        return () => clearTimeout(timer);
    }, [nextPuzzle]);

    return (
        <div className="puzzle2">
            <h1>{number}</h1>
        </div>
    );
}