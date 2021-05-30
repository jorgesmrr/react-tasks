import classNames from "classnames";
import React from "react";

function ListItem({
    icon,
    title,
    primary,
    selected,
    transparent,
    count,
    onClick,
    onItemClick: onIconClick,
    onOptionsClick,
    dataTestId,
    optionsDataTestId,
    children,
}) {
    const className = classNames(
        "flex text-2xl items-center pl-4 pr-2 py-2 mb-2 rounded",
        {
            "shadow-inner bg-overlay": transparent,
            "shadow-sm cursor-pointer transition-colors duration-150 ease-in-out":
                !transparent,
            "text-primary-4 hover:text-primary-5": primary,
            "bg-primary-2": selected,
            "bg-neutral-1 hover:bg-neutral-2": !selected && !transparent,
        }
    );

    const iconClassName = classNames(`${icon} w-10 mr-4 text-center`, {
        "text-white": transparent,
    });

    return (
        <li
            className={className}
            data-testid={dataTestId}
            onClick={() => onClick?.()}
        >
            <i className={iconClassName} onClick={() => onIconClick?.()} />
            <span className="mr-auto">{title || children}</span>

            {count > 0 && (
                <div className="px-4 mr-2 text-white rounded bg-primary-4">
                    {count}
                </div>
            )}

            {onOptionsClick && (
                <div
                    className="w-12 text-center transition-colors duration-150 ease-in-out rounded hover:bg-neutral-3"
                    data-testid={optionsDataTestId}
                    onClick={() => onOptionsClick?.()}
                >
                    <i className="rounded cursor-pointer fas fa-pencil-alt" />
                </div>
            )}
        </li>
    );
}

export default ListItem;
