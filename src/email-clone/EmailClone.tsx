import "./index.scss";
import { EmailObject } from "./EmailData";
import EmailCard from "./components/EmailCard";
import Header from "./components/Header";
import InboxTab from "./components/InboxTab";
import CurrentEmail from "./components/CurrentEmail";
import EmailCardsHeader from "./components/EmailCardsHeader";
import { useState } from "react";

export default function EmailClone() {
    // useState for marking an email as read
    const [emailData, setEmailData] = useState(EmailObject);
    const [currentEmail, setCurrentEmail] = useState(emailData[0]);

    const emailComponents = emailData.map((e) => {
        return (
            <EmailCard
                sender={e.sender}
                header={e.header}
                intro={e.intro}
                body={e.body}
                dateSent={e.dateSent}
                emailOpened={e.emailOpened}
                imgUrl={e.imgUrl}
                id={e.id}
                key={e.id}
                handleClick={openEmail}
            ></EmailCard>
        );
    });

    function openEmail(id: number) {
        setEmailData((prevData) =>
            prevData.map((email) => {
                if (email.id == id) {
                    setCurrentEmail(email);
                    return { ...email, emailOpened: true };
                } else {
                    return email;
                }
            })
        );
    }

    console.log(currentEmail.header);
    return (
        <div className="email-clone">
            <Header></Header>
            <div className="email-clone__body">
                <InboxTab></InboxTab>
                <div className="email-cards-container">
                    <EmailCardsHeader />
                    {emailComponents}
                </div>
                <CurrentEmail emailData={currentEmail}></CurrentEmail>
            </div>
        </div>
    );
}
