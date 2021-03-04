import { HistoryCard } from "../history-card/HistoryCard"
import "./Home.css"

export const Home = (props) => {
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
                <HistoryCard></HistoryCard>
                <HistoryCard></HistoryCard>
                <HistoryCard></HistoryCard>
                <HistoryCard></HistoryCard>
                <HistoryCard></HistoryCard>
                <HistoryCard></HistoryCard>
                <HistoryCard></HistoryCard>
                <HistoryCard></HistoryCard>
                <HistoryCard></HistoryCard>
                <HistoryCard></HistoryCard>
            </div>
        </div>
    )
}