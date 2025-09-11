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

    const [filter, setFilter] = useState({
        importance: "all",
        dateSent: "recent",
        type: "all",
    });

    const filteredEmails = emailData.filter((email) => {
        let importanceMatch =
            filter.importance === "all" ||
            email.importance === filter.importance;

        let typeMatch = filter.type === "all" || email.type === filter.type;

        return importanceMatch && typeMatch;
    });

    let compare = (a, b) => {
        if (a.dateSent < b.dateSent) {
            return -1;
        }
        if (a.dateSent > b.dateSent) {
            return 1;
        }
        return 0;
    };

    if (filter.dateSent === "recent") {
        filteredEmails.sort(compare);
    } else if (filter.dateSent === "oldest") {
        filteredEmails.sort(compare).reverse();
    }

    const emailComponents = filteredEmails.map((e) => {
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
                importance={e.importance}
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

    function clickFilter(e: React.ChangeEvent<HTMLInputElement>) {
        console.log("clicked " + e.currentTarget.name);
        console.log("clicked " + e.currentTarget.value);

        const category = e.currentTarget.name;
        const f = e.currentTarget.value;
        setFilter((prev) => {
            return { ...prev, [category]: f };
        });
    }

    return (
        <div className="email-clone">
            <Header></Header>
            <div className="email-clone__body">
                <InboxTab></InboxTab>
                <div className="email-cards-container">
                    <EmailCardsHeader
                        filterState={filter}
                        handleChange={clickFilter}
                    />
                    {emailComponents}
                </div>
                <CurrentEmail emailData={currentEmail}></CurrentEmail>
            </div>
        </div>
    );
}
