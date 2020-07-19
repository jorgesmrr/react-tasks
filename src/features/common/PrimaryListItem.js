import React from 'react';

export function PrimaryListItem(props) {
    return (
        <li className="flex px-2 text-primary-3 items-center py-2 cursor-pointer rounded hover:text-primary-4 hover:bg-neutral-1"
            onClick={() => props.onClick()}>
            <i className={`${props.icon} mr-2`} />
            <span>{props.title}</span>
        </li>
    );
}