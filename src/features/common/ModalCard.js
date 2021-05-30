import React from "react";

const ModalCard = ({ title, onDismiss, children }) => {
    return (
        <div className="text-2xl card">
            <div className="flex items-center card-block">
                <span className="card-title">{title}</span>
                <span
                    className="ml-auto cursor-pointer fas fa-times"
                    onClick={onDismiss}
                />
            </div>

            {children}
        </div>
    );
};

export default ModalCard;
