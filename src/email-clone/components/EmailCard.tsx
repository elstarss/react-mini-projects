interface emailProps {
    sender: string;
    header: string;
    body: string;
    dateSent: string;
    emailOpened: boolean;
    imgUrl: string;
    id: number;
    handleClick: (id: any) => void;
}

export default function EmailCards(props: emailProps) {
    let buttonClass = "";
    let headerClass = "";

    if (props.emailOpened == true) {
        headerClass = "email-card__header--opened";
        buttonClass = "email-card email-opened";
    } else {
        headerClass = "email-card__header--unopened";
        buttonClass = "email-card email-unopened";
    }

    return (
        <button
            className={buttonClass}
            onClick={() => props.handleClick(props.id)}
        >
            <h4 className="email-card__sender">{props.sender}</h4>
            <h4 className="email-card__date-sent">{props.dateSent}</h4>
            <h3 className={headerClass}>{props.header}</h3>
            <img
                className="email-card__img"
                src={props.imgUrl}
                alt="react logo"
            />
            <p className="email-card__body">{props.body}</p>
        </button>
    );
}
