import { useState } from "react";
import "./index.scss";

export default function Login() {
    const [isSignUp, setIsSignUp] = useState(false);

    const toggleForm = () => {
        setIsSignUp(!isSignUp);
    };

    function submitSignUp(formData: FormData) {
        const data = Object.fromEntries(formData);
        console.log(data);
    }

    function submitSignIn(formData: FormData) {
        const data = Object.fromEntries(formData);
        console.log(data);
    }

    // fetch data from backend

    return (
        <div className="bg">
            <div className={`form-box ${isSignUp ? "active" : ""}`}>
                {/* sign in*/}
                <form className="form sign-in-form" action={submitSignIn}>
                    <h2 className="form__header ">Sign In</h2>
                    <input
                        className="form__input"
                        type="text"
                        placeholder="Username"
                        name="username_in"
                        required
                    />
                    <input
                        className="form__input"
                        type="password"
                        placeholder="Password"
                        name="password_in"
                        required
                    />
                    <button className="form__btn">Login</button>
                    <p className="toggle-form toggle-form__up">
                        Don't have an account?{" "}
                        <span
                            className="toggle-form__link"
                            onClick={toggleForm}
                        >
                            Sign Up
                        </span>
                    </p>
                </form>

                {/*sign up */}
                <form className="form sign-up-form" action={submitSignUp}>
                    <h2 className="form__header ">Sign Up</h2>
                    <input
                        className="form__input"
                        type="text"
                        placeholder="Username"
                        name="username_up"
                        required
                    />
                    <input
                        className="form__input"
                        type="email"
                        placeholder="Email"
                        name="email_up"
                        required
                    />
                    <input
                        className="form__input"
                        type="password"
                        placeholder="Password"
                        name="password_up "
                        required
                    />
                    <button className="form__btn">Register</button>
                    <p className="toggle-form toggle-form__in">
                        Already have an account?{" "}
                        <span
                            className="toggle-form__link"
                            onClick={toggleForm}
                        >
                            Sign In
                        </span>
                    </p>
                </form>
            </div>
        </div>
    );
}
