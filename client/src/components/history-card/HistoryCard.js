import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEdit, faTrashAlt } from '@fortawesome/free-solid-svg-icons'

import "./HistoryCard.css"
import { useState } from 'react'

export const HistoryCard = (props) => {

    const [display, setDisplay] = useState("none")
    const [concept, setConcept] = useState("")
    const [amount, setAmount] = useState("")
    const [date, setDate] = useState("")
    const operation = props.operation

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


    const changeDisplay = (editDone) => {
        if (!props.editing || editDone) {
            props.startEditing()
            if (display == "none") {
                setDisplay("flex")
            } else {
                setDisplay("none")
            }
        }
    }

    const resetStates = () => {
        setConcept("")
        setAmount("")
        setDate("")
        console.log("States reseted")
    }

    const updateOperation = () => {
        console.log("Operation updated!")
    }

    return (
        <div className="card-container">
            <div className="history-card">
                <div>${operation.amount}</div>
                <div>{operation.type}</div>
                <div>{operation.date}</div>
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
                        <button onClick={() => {
                            resetStates()
                            changeDisplay(true)
                            props.endEditing()
                        }}>Cancel</button>
                        <button onClick={() => {
                            updateOperation()
                            changeDisplay(true)
                            props.endEditing()
                        }}>Save</button>
                    </div>
                </div>
            </div>
        </div>
    )
}