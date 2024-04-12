export default function HomePage({nextPuzzle}) {
    return (
        <div>
            <h1>Welcome to ShadowFund Ventures Escape Room</h1>
            <button onClick={nextPuzzle}>Get Started</button>
        </div>
    )
}