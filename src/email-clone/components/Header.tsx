export default function Header() {
    return (
        <nav className="header">
            <img
                src="/assets/Logo.png"
                alt="logo image"
                className="header__logo"
            />
            <h2>Relay.io</h2>

            <img
                src="/assets/profile-pic.png"
                alt="profile image"
                className="header__profile"
            />
        </nav>
    );
}
