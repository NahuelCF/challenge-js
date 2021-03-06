import { HistoryCard } from "../history-card/HistoryCard"
import "./NewOperation.css"

import { useState } from "react"

export const NewOperation = () => {
    const [editing, setEditing] = useState(false)

    const startEditing = () => {
        setEditing(true)
    }

    const endEditing = () => {
        setEditing(false)
    }

    return (
        <div>
            <div className="newOperation-container">
                <div className="title">Create a new operation</div>
                <div className="form-container">
                    <div className="form-input">
                        <label htmlFor="concept">Write a concept:</label>
                        <input name="concept" type="text" placeholder="Concept"></input>
                    </div>
                    <div className="form-input">
                        <label htmlFor="amount">Type an amount:</label>
                        <input name="amount" type="number"></input>
                    </div>
                    <div className="form-input">
                        <label htmlFor="date">Choose a date:</label>
                        <input name="date" type="date"></input>
                    </div>
                    <div className="form-input">
                        <label htmlFor="type">Select a type:</label>
                        <select style={{ width: "11rem" }} name="type">
                            <option>Income</option>
                            <option>Out</option>
                        </select>
                    </div>
                    <button onClick={() => console.log(editing)} style={{ gridColumn: "1/-1" }}>Done</button>
                </div>
            </div>
            <div className="lists-container">
                <div className="list">
                    <h2>Income List</h2>
                    <div className="cards-container">
                        <HistoryCard
                            editing={editing} startEditing={startEditing} endEditing={endEditing} addButtons="true"
                        ></HistoryCard>
                        <HistoryCard
                            editing={editing} startEditing={startEditing} endEditing={endEditing} addButtons="true"
                        ></HistoryCard>
                        <HistoryCard
                            editing={editing} startEditing={startEditing} endEditing={endEditing} addButtons="true"
                        ></HistoryCard>
                        <HistoryCard
                            editing={editing} startEditing={startEditing} endEditing={endEditing} addButtons="true"
                        ></HistoryCard>
                        <HistoryCard
                            editing={editing} startEditing={startEditing} endEditing={endEditing} addButtons="true"
                        ></HistoryCard>
                        <HistoryCard
                            editing={editing} startEditing={startEditing} endEditing={endEditing} addButtons="true"
                        ></HistoryCard>
                        <HistoryCard
                            editing={editing} startEditing={startEditing} endEditing={endEditing} addButtons="true"
                        ></HistoryCard>
                        <HistoryCard
                            editing={editing} startEditing={startEditing} endEditing={endEditing} addButtons="true"
                        ></HistoryCard>
                        <HistoryCard
                            editing={editing} startEditing={startEditing} endEditing={endEditing} addButtons="true"
                        ></HistoryCard>
                        <HistoryCard
                            editing={editing} startEditing={startEditing} endEditing={endEditing} addButtons="true"
                        ></HistoryCard>
                    </div>
                </div>
                <div className="list">
                    <h2>Out list</h2>
                    <div className="cards-container">
                        <HistoryCard
                            editing={editing} startEditing={startEditing} endEditing={endEditing} addButtons="true"
                        ></HistoryCard>
                        <HistoryCard
                            editing={editing} startEditing={startEditing} endEditing={endEditing} addButtons="true"
                        ></HistoryCard>
                        <HistoryCard
                            editing={editing} startEditing={startEditing} endEditing={endEditing} addButtons="true"
                        ></HistoryCard>
                        <HistoryCard
                            editing={editing} startEditing={startEditing} endEditing={endEditing} addButtons="true"
                        ></HistoryCard>
                        <HistoryCard
                            editing={editing} startEditing={startEditing} endEditing={endEditing} addButtons="true"
                        ></HistoryCard>
                        <HistoryCard
                            editing={editing} startEditing={startEditing} endEditing={endEditing} addButtons="true"
                        ></HistoryCard>
                        <HistoryCard
                            editing={editing} startEditing={startEditing} endEditing={endEditing} addButtons="true"
                        ></HistoryCard>
                        <HistoryCard
                            editing={editing} startEditing={startEditing} endEditing={endEditing} addButtons="true"
                        ></HistoryCard>
                        <HistoryCard
                            editing={editing} startEditing={startEditing} endEditing={endEditing} addButtons="true"
                        ></HistoryCard>
                        <HistoryCard
                            editing={editing} startEditing={startEditing} endEditing={endEditing} addButtons="true"
                        ></HistoryCard>
                    </div>
                </div>
            </div>
        </div >
    )
}