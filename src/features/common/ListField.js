import TextField from "@bit/jorgemoreira.headless-react.input.text-field";
import React, { useRef, useState } from "react";

function ListField({ icon, placeholder, dataTestId, onSubmit }) {
    const textFieldRef = useRef();
    const [text, setText] = useState("");

    const setFocusOnClick = () => textFieldRef.current.focus();

    const onEnter = () => {
        setText("");
        onSubmit(text);
    };

    return (
        <li
            className="flex items-center py-2 pl-4 pr-2 mb-2 text-2xl rounded shadow-inner bg-overlay"
            onClick={setFocusOnClick}
        >
            <i
                className={`${icon} w-10 mr-4 text-white text-center opacity-75`}
            />
            <TextField
                className="flex-grow p-0 transparent-dark"
                ref={textFieldRef}
                value={text}
                dataTestId={dataTestId}
                placeholder={placeholder}
                onChange={setText}
                onEnter={onEnter}
            />
        </li>
    );
}

export default ListField;
