import "./HistoryCard.css"

export const HistoryCard = (props) => {

    const buttonsTemplate = () => {
        if (props.addButtons) {
            return (
                <div>
                    <button>Edit</button>
                    <button>Delete</button>
                </div>
            )
        }
    }

    return (
        <div className="history-card">
            <div>$1500</div>
            <div>Income</div>
            <div>15/05/2020</div>
            {buttonsTemplate()}
        </div>
    )
}