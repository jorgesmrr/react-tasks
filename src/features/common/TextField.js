import React from 'react';

function TextField(props) {
    const label = props.label ? <label>{props.label}</label> : null;

    return (
        <div className={(props.label ? 'form-group' : '')}>
            {label}
            <input type="text"
                value={props.value}
                data-test={props['data-test']}
                onChange={ev => props.onChange(ev.target.value)} />
        </div>
    )
}

export default TextField;