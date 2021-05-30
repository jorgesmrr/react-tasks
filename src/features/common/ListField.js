import TextField from "@bit/jorgemoreira.headless-react.input.text-field";
import React, { useRef, useState } from "react";
import ListItem from "./ListItem";

function ListField({ icon, placeholder, dataTestId, onSubmit }) {
    const textFieldRef = useRef();
    const [text, setText] = useState("");

    const setFocusOnClick = () => textFieldRef.current.focus();

    const onEnter = () => {
        setText("");
        onSubmit(text);
    };

    return (
        <ListItem transparent icon={icon} onClick={setFocusOnClick}>
            <TextField
                className="flex-grow p-0 transparent-dark"
                ref={textFieldRef}
                value={text}
                dataTestId={dataTestId}
                placeholder={placeholder}
                onChange={setText}
                onEnter={onEnter}
            />
        </ListItem>
    );
}

export default ListField;
