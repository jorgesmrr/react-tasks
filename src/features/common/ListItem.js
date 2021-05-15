import React from "react";

function ListItem({
    icon,
    title,
    primary,
    selected,
    count,
    onClick,
    onOptionsClick,
    dataTest,
    optionsDataTest,
}) {
    return (
        <li
            className={`flex text-2xl items-center p-4 mb-2 rounded cursor-pointer  shadow-sm ${
                primary ? "text-primary-4 hover:text-primary-5" : ""
            } ${
                selected ? "bg-primary-2" : "bg-neutral-1  hover:bg-neutral-2"
            }`}
            data-test={dataTest}
            onClick={() => onClick()}
        >
            <i className={`${icon} mr-4 text-3xl`} />
            <span className="mr-auto">{title}</span>

            {count > 0 && (
                <div className="px-2 mr-2 rounded bg-neutral-3 text-neutral-4">
                    {count}
                </div>
            )}

            {onOptionsClick && (
                <div
                    className="w-12 py-2 text-center rounded hover:bg-neutral-3"
                    data-test={optionsDataTest}
                    onClick={() => onOptionsClick()}
                >
                    <i className="rounded cursor-pointer fas fa-ellipsis-v" />
                </div>
            )}
        </li>
    );
}

export default ListItem;
