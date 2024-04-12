export default function Puzzle6({restart}) {
    // Function to generate a random alphanumeric code
    const generateRandomCode = () => {
        const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
        let code = '';
        for (let i = 0; i < 6; i++) {
            code += characters.charAt(Math.floor(Math.random() * characters.length));
        }
        return code;
    };

    const randomCode = generateRandomCode();

    return (
        <div>
            <h1>Congrats on making it out!</h1>
            <h3>You've won 20% off the nearest escape room in your area!</h3>
            <p>Your Code is: {randomCode}</p>
            <button onClick={restart}>Back to the Start</button>
        </div>
    );
}