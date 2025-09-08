import "./index.scss";
import { EmailData } from "./EmailData";
import EmailCard from "./components/EmailCard";
import Header from "./components/Header";
import InboxTab from "./components/InboxTab";
export default function EmailClone() {
    const emailCards = EmailData.map((e) => {
        return (
            <EmailCard
                sender={e.sender}
                header={e.header}
                body={e.body}
                dateSent={e.dateSent}
                emailOpened={e.emailOpened}
                imgUrl={e.imgUrl}
            ></EmailCard>
        );
    });

    return (
        <div className="email-clone">
            <Header></Header>
            <InboxTab></InboxTab>
            <div className="email-cards-container">{emailCards}</div>
        </div>
    );
}
