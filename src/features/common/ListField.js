import TextField from "@bit/jorgemoreira.headless-react.input.text-field";
import React, { useRef, useState } from "react";

function ListField({ icon, placeholder, dataTest, onSubmit }) {
    const textFieldRef = useRef();
    const [text, setText] = useState("");

    const setFocusOnClick = () => textFieldRef.current.focus();

    const onEnter = () => {
        setText("");
        onSubmit(text);
    };

    return (
        <li
            className="flex items-center p-4 mb-2 text-2xl rounded bg-overlay"
            onClick={setFocusOnClick}
        >
            <i className={`${icon} mr-4 text-3xl text-white opacity-75`} />
            <TextField
                className="flex-grow transparent-dark"
                ref={textFieldRef}
                value={text}
                data-test={dataTest}
                placeholder={placeholder}
                onChange={setText}
                onEnter={onEnter}
            />
        </li>
    );
}

export default ListField;
