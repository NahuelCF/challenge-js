import "./NewOperation.css"

export const NewOperation = () => {
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
                    <button style={{ gridColumn: "1/-1" }}>CLICK</button>
                </div>
            </div>
            <div className="lists-container">
                <div className="list-income">Income List</div>
                <div className="list-out">Out list</div>
            </div>
        </div >
    )
}