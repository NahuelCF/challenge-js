import { HistoryCard } from "../history-card/HistoryCard"
import "./Home.css"

import { useState, useEffect } from "react"
import { getOperations } from "../../service"

export const Home = (props) => {

    const [operations, setOperations] = useState([])

    useEffect(() => {
        const getOperationsLocal = async () => {
            let operations = await getOperations()
            setOperations(operations.slice(1).slice(-10))
        }
        getOperationsLocal()
    }, [])

    return (
        <div className="home-container">
            <div className="balance-container">
                <h2>Balance</h2>
                <div className="balance">0</div>
                <h1>
                    <button onClick={() => props.history.push("/new-operation")}>Go to ABM</button>
                </h1>
            </div>
            <div className="history-container">
                {[...operations].map(operation => <HistoryCard operation={operation} />)}
            </div>
        </div>
    )
}