import "./ActionButton.scss";

function ActionButton({innerText, type}) {
    return (
        <>
            <button className="action-button" type={type}>{innerText}</button>
        </>
    )
}

export default ActionButton;