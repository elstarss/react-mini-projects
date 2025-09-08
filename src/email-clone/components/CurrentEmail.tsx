interface currentEmailProps {
    emailData: {
        sender: string;
        header: string;
        intro: string;
        body: string;
        dateSent: string;
        emailOpened: boolean;
        importance: string;
        type: string;
        imgUrl: string;
        id: number;
    };
}

export default function CurrentEmail(props: currentEmailProps) {
    return (
        <div className="current-email">
            <div className="current-email__top">
                <h4 className="current-email__sender">
                    {props.emailData.sender}
                </h4>
                <h4 className="current-email__date">
                    {props.emailData.dateSent}
                </h4>
                <button className="current-email__top--btn">
                    <img src="/assets/more-btn.png" alt="... " />
                </button>
                <button className="current-email__top--btn">
                    <img src="/assets/trash-btn.png" alt="" />
                </button>
                <button className="current-email__top--btn">
                    <img src="/assets/forward-btn.png" alt="" />
                </button>
            </div>
            <h1 className="current-email__header">{props.emailData.header}</h1>
            <h3 className="current-email__header">{props.emailData.intro}</h3>
            <p className="current-email__body">{props.emailData.body}</p>
        </div>
    );
}
