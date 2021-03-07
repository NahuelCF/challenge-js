import { Operation } from "./domain/operation"

const SERVER_URL = "http://localhost:3001"

export const getOperations = async () => {
    let operations = []
    await fetch(SERVER_URL + "/getOperations")
        .then(result => result.json())
        .then((items) => {
            operations = items.map(operation => Operation.fromJSON(operation))
        })
    return operations
}

export const getBalance = async () => {
    let balance
    await fetch(SERVER_URL + "/getBalance")
        .then(result => result.json())
        .then(item => balance = item)
    return balance
}