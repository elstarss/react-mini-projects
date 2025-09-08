// import type { emailProps } from "../EmailClone";

export default function CurrentEmail(props: any) {
    return (
        <div className="current-email">
            <h1>{props.header}</h1>
            <p className="current-email__p">{props.body}</p>
        </div>
    );
}
