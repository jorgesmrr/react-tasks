const ModalCard = ({ title, onDismiss, children }) => {
    return (
        <div className="card">
            <div className="flex card-block">
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
