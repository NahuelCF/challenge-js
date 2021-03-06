import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEdit, faTrashAlt } from '@fortawesome/free-solid-svg-icons'

import "./HistoryCard.css"
import { useState } from 'react'

export const HistoryCard = (props) => {

    const [display, setDisplay] = useState("none")

    const buttonsTemplate = () => {
        if (props.addButtons) {
            return (
                <div>
                    <button onClick={() => changeDisplay()} className="card-button">
                        <FontAwesomeIcon icon={faEdit} />
                    </button>
                    <button className="card-button">
                        <FontAwesomeIcon icon={faTrashAlt} />
                    </button>
                </div>
            )
        }
    }


    const changeDisplay = () => {
        if (display == "none") {
            setDisplay("flex")
        } else {
            setDisplay("none")
        }
    }

    return (
        <div className="card-container">
            <div className="history-card">
                <div>$1500</div>
                <div>Income</div>
                <div>15/05/2020</div>
                {buttonsTemplate()}
            </div>

            <div className="edit-container" style={{ display: display }}>
                <div>
                    <div className="form-input">
                        <label htmlFor="concept">Write a concept:</label>
                        <input name="concept" type="text" placeholder="Concept"></input>
                    </div>
                    <div className="form-input">
                        <label htmlFor="amount">Type an amount:</label>
                        <input name="amount" type="number"></input>
                    </div>
                </div>
                <div>
                    <div className="form-input">
                        <label htmlFor="date">Choose a date:</label>
                        <input name="date" type="date"></input>
                    </div>
                    <div className="card-buttons-edit">
                        <button>Cancel</button>
                        <button>Save</button>
                    </div>
                </div>
            </div>
        </div>
    )
}