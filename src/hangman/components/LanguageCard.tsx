interface languageProps {
    name: string;
    backgroundColor: string;
    color: string;
}

export default function LanguageCard({
    name,
    backgroundColor,
    color,
}: languageProps) {
    return (
        <div
            className="language-card"
            style={{ backgroundColor: backgroundColor, color: color }}
        >
            <p>{name}</p>
        </div>
    );
}
