export class Operation {
    constructor(concept, amount, type, date) {
        this.concept = concept
        this.amount = amount
        this.type = type
        this.date = date
    }

    static fromJSON(operationJSON) {
        return new Operation(
            operationJSON.concept,
            operationJSON.amount,
            operationJSON.type,
            operationJSON.date
        )
    }
}