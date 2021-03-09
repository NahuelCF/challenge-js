import { HistoryCard } from "../history-card/HistoryCard"
import "./Home.css"

import { useState, useEffect } from "react"
import { getBalance, getOperations } from "../../service"

export const Home = (props) => {

    const [operations, setOperations] = useState([])
    const [balance, setBalance] = useState("")

    useEffect(() => {
        const init = async () => {
            let operations = await getOperations()
            setOperations(operations.slice(1).slice(-10))
            let balance = await getBalance()
            setBalance(balance)
        }
        init()
    }, [])

    return (
        <div className="home-container">
            <div className="balance-container">
                <h2>Balance</h2>
                <div className="balance">${balance}</div>
                <h1>
                    <button onClick={() => props.history.push("/new-operation")}>
                        Create/Edit/Delete an Operation
                    </button>
                </h1>
            </div>
            <div className="history-container">
                {[...operations].map(operation => <HistoryCard key={operation.id} operation={operation} />)}
            </div>
        </div>
    )
}