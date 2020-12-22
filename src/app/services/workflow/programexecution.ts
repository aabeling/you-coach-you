import { Program, Operation } from "./program";
import { LogService } from '~/app/services/logging/log.service';

export class ProgramExecution {

    private operationIndex : number;
    isStopped : boolean = false;

    constructor(
        private program : Program,
        private log : LogService) {
        this.program = program;
        this.operationIndex = 0;
    }
    
    nextOperation() : Operation {

        if (!this.program.operations) {
            this.log.debug("no operations defined in program");
            return null;
        }
        
        if (this.operationIndex < this.program.operations.length) {
            let result = this.program.operations[this.operationIndex];
            this.log.debug("nextOperation at index {}: {}", this.operationIndex, result);
            return result;
        } else {
            this.log.debug("no more operations");
            return null;
        }
    }

    next() {
        this.operationIndex = this.operationIndex + 1;
        this.log.debug("next operationIndex: {}", this.operationIndex);
    }

    stop() {
        this.isStopped = true;
    }
}