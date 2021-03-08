import { Operation } from "./domain/operation"

const SERVER_URL = "http://localhost:3001"

export const getOperationById = async (id) => {
    let operation
    await fetch(SERVER_URL + "/getOperation/" + id)
        .then(result => result.json())
        .then(item => operation = Operation.fromJSON(item))
    return operation
}

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

export const createOperation = async (concept, amount, type, date) => {
    const body = { concept: concept, amount: amount, type: type, date: date }
    await fetch(SERVER_URL + "/createOperation", {
        method: "POST",
        body: JSON.stringify(body),
        headers: {
            'Content-Type': 'application/json'
        }
    })
}

export const updateOperation = async (concept, amount, date, id) => {
    const body = { concept: concept, amount: amount, date: date, id: id }
    await fetch(SERVER_URL + "/updateOperation", {
        method: "PUT",
        body: JSON.stringify(body),
        headers: {
            'Content-Type': 'application/json'
        }
    })
}

export const deleteOperation = async (id) => {
    await fetch(SERVER_URL + "/deleteOperation/" + id, {
        method: "DELETE"
    })
}