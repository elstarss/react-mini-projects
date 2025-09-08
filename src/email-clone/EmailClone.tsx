import "./index.scss";
import { EmailObject } from "./EmailData";
import EmailCard from "./components/EmailCard";
import Header from "./components/Header";
import InboxTab from "./components/InboxTab";
import CurrentEmail from "./components/CurrentEmail";
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
                body={e.body}
                dateSent={e.dateSent}
                emailOpened={e.emailOpened}
                imgUrl={e.imgUrl}
                id={e.id}
                key={e.id}
                handleClick={openEmail}
                isCurrent={e.isCurrent}
            ></EmailCard>
        );
    });

    function openEmail(id: number) {
        setEmailData((prevData) =>
            prevData.map((email) => {
                return email.id == id
                    ? {
                          ...email,
                          emailOpened: true,
                          isCurrent: true,
                      }
                    : {
                          ...email,
                          isCurrent: false,
                      };
            })
        );
    }

    function settingCurrent() {
        let current = emailData.find((email) => email.isCurrent == true);
        setCurrentEmail((prev) => current);
    }

    return (
        <div className="email-clone">
            <Header></Header>
            <div className="email-clone__body">
                <InboxTab></InboxTab>
                <div className="email-cards-container">{emailComponents}</div>
                <CurrentEmail emailData={currentEmail}></CurrentEmail>
            </div>
        </div>
    );
}
