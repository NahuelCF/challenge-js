import { HistoryCard } from "../history-card/HistoryCard"
import "./NewOperation.css"

import { useState, useEffect } from "react"
import { getOperations, createOperation } from "../../service"

export const NewOperation = (props) => {
    const [editing, setEditing] = useState(false)

    const [operations, setOperations] = useState([])
    const [concept, setConcept] = useState("")
    const [amount, setAmount] = useState("")
    const [date, setDate] = useState("")
    const [type, setType] = useState("income")

    useEffect(() => {
        getOperationsLocal()
    }, [])

    const getOperationsLocal = async () => {
        let operations = await getOperations()
        setOperations(operations)
    }

    const startEditing = () => {
        setEditing(true)
    }

    const endEditing = () => {
        setEditing(false)
    }

    const saveOperation = async () => {
        await createOperation(concept, amount, type, date)
        getOperationsLocal()
    }

    const goToHome = () => {
        props.history.push("/home")
    }

    const cardTypeTemplate = (type) => {
        return (
            <div className="cards-container">
                {[...operations].filter(operation => operation.type == type).map(
                    operation => <HistoryCard
                        key={operation.id}
                        editing={editing}
                        startEditing={startEditing}
                        endEditing={endEditing}
                        addButtons="true"
                        operation={operation}
                        refreshPage={getOperationsLocal}
                    ></HistoryCard>
                )}
            </div>
        )
    }

    return (
        <div>
            <div className="newOperation-container">
                <div >
                    <div style={{ display: "flex", justifyContent: "flex-start", padding: "1rem 0 0 1rem" }}>
                        <button onClick={() => goToHome()}>Home</button>
                    </div>
                    <div className="title">Create a new operation</div>
                </div>
                <div className="form-container">
                    <div className="form-input">
                        <label htmlFor="concept">Write a concept:</label>
                        <input name="concept" type="text" placeholder="Concept"
                            value={concept}
                            onChange={(event) => setConcept(event.target.value)}></input>
                    </div>
                    <div className="form-input">
                        <label htmlFor="amount">Type an amount:</label>
                        <input name="amount" type="number" value={amount}
                            onChange={(event) => setAmount(event.target.value)}></input>
                    </div>
                    <div className="form-input">
                        <label htmlFor="date">Choose a date:</label>
                        <input name="date" type="date" value={date}
                            onChange={event => setDate(event.target.value)}></input>
                    </div>
                    <div className="form-input">
                        <label htmlFor="type">Select a type:</label>
                        <select style={{ width: "11rem" }} name="type" onChange={event => setType(event.target.value)}>
                            <option value="income">Income</option>
                            <option value="out">Out</option>
                        </select>
                    </div>
                    <button style={{ gridColumn: "1/-1" }} onClick={() => saveOperation()}>Save</button>
                </div>
            </div>
            <div className="lists-container">
                <div className="list">
                    <h2>Income List</h2>
                    {cardTypeTemplate("income")}
                </div>
                <div className="list">
                    <h2>Out list</h2>
                    {cardTypeTemplate("out")}
                </div>
            </div>
        </div >
    )
}