export default function InboxTab() {
    return (
        <div className="inbox-tab">
            <button className="inbox-tab__btn">
                <img
                    src="/assets/mailbox.png"
                    alt="mailbox icon"
                    className="inbox-tab__btn--img"
                />
                Inbox
            </button>
            <button className="inbox-tab__btn">
                <img
                    src="/assets/trash.png"
                    alt="rubbish bin icon"
                    className="inbox-tab__btn--img"
                />
                Trash
            </button>
        </div>
    );
}
