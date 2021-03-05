import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEdit, faTrashAlt } from '@fortawesome/free-solid-svg-icons'

import "./HistoryCard.css"

export const HistoryCard = (props) => {

    const buttonsTemplate = () => {
        if (props.addButtons) {
            return (
                <div>
                    <button className="card-button">
                        <FontAwesomeIcon icon={faEdit} />
                    </button>
                    <button className="card-button">
                        <FontAwesomeIcon icon={faTrashAlt} />
                    </button>
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