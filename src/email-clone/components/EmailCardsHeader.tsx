import { useState } from "react";
export default function EmailCardsHeader(props: any) {
    const [filter, setFilter] = useState(false);
    function handleClick() {
        setFilter((prev) => !prev);
    }

    return (
        <div>
            <button>Compose</button>
            <button onClick={handleClick}>Filter by</button>
            {filter ? (
                <div className="filter">
                    <form action="">
                        <fieldset>
                            <legend>Importance</legend>
                            <label>
                                <input
                                    type="radio"
                                    name="importance"
                                    value="high"
                                    onChange={props.handleChange}
                                />
                                High
                            </label>
                            <label>
                                <input
                                    type="radio"
                                    name="importance"
                                    value="medium"
                                    onChange={props.handleChange}
                                />
                                Medium
                            </label>
                            <label>
                                <input
                                    type="radio"
                                    name="importance"
                                    value="low"
                                    onChange={props.handleChange}
                                />
                                Low
                            </label>
                        </fieldset>

                        <fieldset>
                            <legend>Date</legend>
                            <label>
                                <input
                                    type="radio"
                                    name="dateSent"
                                    value="recent"
                                    onChange={props.handleChange}
                                />
                                Most Recent
                            </label>
                            <label>
                                <input
                                    type="radio"
                                    name="dateSent"
                                    value="oldest"
                                    onChange={props.handleChange}
                                />
                                Oldest
                            </label>
                        </fieldset>

                        <fieldset>
                            <legend>Type</legend>
                            <label>
                                <input
                                    type="radio"
                                    name="type"
                                    value="personal"
                                    onChange={props.handleChange}
                                />
                                Personal
                            </label>
                            <label>
                                <input
                                    type="radio"
                                    name="type"
                                    value="work"
                                    onChange={props.handleChange}
                                />
                                Work
                            </label>
                        </fieldset>
                        <label>
                            <button>Clear all</button>
                        </label>
                    </form>
                </div>
            ) : null}
        </div>
    );
}
