import { Program, Operation } from "./program";

export class ProgramExecution {

    private operationIndex : number;

    constructor(private program : Program) {
        this.program = program;
        this.operationIndex = 0;
    }
    
    nextOperation() : Operation {

        if (this.operationIndex < this.program.operations.length) {
            let result = this.program.operations[this.operationIndex];
            console.log("nextOperation at index: ", this.operationIndex, result);
            return result;
        } else {
            console.log("no more operations");
            return null;
        }
    }

    next() {
        this.operationIndex = this.operationIndex + 1;
        console.log("next operationIndex: " + this.operationIndex);
    }
}