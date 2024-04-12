export default function Start({nextPuzzle}) {
    return (
        <div>
            <p>Your Mission if you choose to accept it is to infiltrate ShadowFund Ventures, a large investment firm on the top floor of the Cryptic Capital Building in Metrocity, and crack the code to get into the computer of the VP of Investing.</p>
            <p>
Details: ShadowFund Ventures is a large investment firm that holds a monopoly on several industries. Your job is to get into the top floor. You will have to solve 3 puzzles along the way. Each puzzle, once complete will take you to the next. You will need to solve all 3 to get to the top and into the computer. Good Luck.</p>
            <button onClick={nextPuzzle}>Accept Mission</button>
        </div>
    )
}