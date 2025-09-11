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
                    <fieldset>
                        <legend>Importance</legend>
                        <label>
                            <input
                                type="radio"
                                name="importance"
                                value="high"
                            />
                            High
                        </label>
                        <label>
                            <input
                                type="radio"
                                name="importance"
                                value="medium"
                            />
                            Medium
                        </label>
                        <label>
                            <input type="radio" name="importance" value="low" />
                            Low
                        </label>
                    </fieldset>

                    <fieldset>
                        <legend>Date</legend>
                        <label>
                            <input
                                type="radio"
                                name="date"
                                value="most-recent"
                            />
                            Most Recent
                        </label>
                        <label>
                            <input type="radio" name="date" value="oldest" />
                            Oldest
                        </label>
                    </fieldset>

                    <fieldset>
                        <legend>Type</legend>
                        <label>
                            <input type="radio" name="type" value="personal" />
                            Personal
                        </label>
                        <label>
                            <input type="radio" name="type" value="work" />
                            Work
                        </label>
                    </fieldset>
                </div>
            ) : null}
        </div>
    );
}
