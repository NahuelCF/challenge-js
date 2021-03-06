export class Operation {
    constructor(id, concept, amount, type, date) {
        this.id = id
        this.concept = concept
        this.amount = amount
        this.type = type
        this.date = date
    }

    static fromJSON(operationJSON) {
        return new Operation(
            operationJSON.id,
            operationJSON.concept,
            operationJSON.amount,
            operationJSON.type,
            operationJSON.date
        )
    }
}