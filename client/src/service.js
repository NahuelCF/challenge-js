import { Operation } from "./domain/operation"

export const getOperations = async () => {
    let operations = []
    await fetch("http://localhost:3001/getOperations")
        .then(result => result.json())
        .then((items) => {
            operations = items.items.map(operation => Operation.fromJSON(operation))
        })
    console.log(operations)
}