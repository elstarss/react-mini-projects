interface LetterProps {
    value: string;
    isClicked: boolean;
}

export default function LetterCard({ value, isClicked }: LetterProps) {
    let style = "";
    if (isClicked == true) {
        style = "letter-card letter-card__clicked";
    } else {
        style = "letter-card letter-card__clicked";
    }

    return (
        <div className={style}>
            <h1>{value}</h1>
        </div>
    );
}
