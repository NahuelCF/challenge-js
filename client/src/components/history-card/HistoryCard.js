import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEdit, faTrashAlt } from '@fortawesome/free-solid-svg-icons'

import "./HistoryCard.css"
import { useState } from 'react'
import { deleteOperation, getOperationById, updateOperation } from '../../service'

export const HistoryCard = (props) => {

    const [operation, setOperation] = useState(props.operation)
    const [display, setDisplay] = useState("none")
    const [concept, setConcept] = useState(operation.concept)
    const [amount, setAmount] = useState(operation.amount)
    const [date, setDate] = useState(operation.date)

    const refreshOperation = async () => {
        const operationUpdated = await getOperationById(operation.id)
        setOperation(operationUpdated)
    }

    const buttonsTemplate = () => {
        if (props.addButtons) {
            return (
                <div>
                    <button onClick={() => changeDisplay()} className="card-button">
                        <FontAwesomeIcon icon={faEdit} />
                    </button>
                    <button className="card-button">
                        <FontAwesomeIcon onClick={() => deleteOperationLocal()} icon={faTrashAlt} />
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
        setConcept(operation.concept)
        setAmount(operation.amount)
        setDate(operation.date)
    }

    const updateOperationLocal = async () => {
        await updateOperation(concept, amount, date, operation.id)
    }

    const editingDone = () => {
        changeDisplay(true)
        props.endEditing()
    }

    const deleteOperationLocal = async () => {
        await deleteOperation(operation.id)
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
                        <input value={concept} name="concept" type="text" placeholder="Concept"
                            onChange={event => setConcept(event.target.value)}
                        ></input>
                    </div>
                    <div className="form-input">
                        <label htmlFor="amount">Type an amount:</label>
                        <input value={amount} name="amount" type="number"
                            onChange={event => setAmount(event.target.value)}
                        ></input>
                    </div>
                </div>
                <div>
                    <div className="form-input">
                        <label htmlFor="date">Choose a date:</label>
                        <input value={date} name="date" type="date"
                            onChange={event => setDate(event.target.value)}
                        ></input>
                    </div>
                    <div className="card-buttons-edit">
                        <button onClick={() => {
                            resetStates()
                            editingDone()
                        }}>Cancel</button>
                        <button onClick={() => {
                            updateOperationLocal()
                            editingDone()
                            refreshOperation()
                        }}>Save</button>
                    </div>
                </div>
            </div>
        </div>
    )
}