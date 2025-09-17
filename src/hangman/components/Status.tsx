export default function Status({ win }: any) {
    let style = "";
    if (win) {
        style = "backgroundColor: green";
    } else {
        style = "backgroundColor: red";
    }

    return (
        <div
            className="win-status"
            style={
                win ? { backgroundColor: "green" } : { backgroundColor: "red" }
            }
        >
            <h2>{win ? "You win!" : "Game over!"}</h2>
            <h3>{win ? "Well done!" : "You lose :("}</h3>
        </div>
    );
}
