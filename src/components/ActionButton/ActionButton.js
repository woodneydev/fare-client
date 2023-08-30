import "./ActionButton.scss";

function ActionButton({innerText}) {
    return (
        <>
            <button className="action-button">{innerText}</button>
        </>
    )
}

export default ActionButton;