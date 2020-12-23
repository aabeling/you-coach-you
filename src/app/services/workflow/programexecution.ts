import { Program, Operation } from "./program";
import { LogService } from '~/app/services/logging/log.service';

const LOG = LogService.getLogger('ProgramExecution');

export class ProgramExecution {

    private operationIndex : number;
    isStopped : boolean = false;

    constructor(
        private program : Program) {
        this.program = program;
        this.operationIndex = 0;
    }
    
    nextOperation() : Operation {

        if (!this.program.operations) {
            LOG.debug("no operations defined in program");
            return null;
        }
        
        if (this.operationIndex < this.program.operations.length) {
            let result = this.program.operations[this.operationIndex];
            LOG.debug("nextOperation at index {}: {}", this.operationIndex, result);
            return result;
        } else {
            LOG.debug("no more operations");
            return null;
        }
    }

    next() {
        this.operationIndex = this.operationIndex + 1;
        LOG.debug("next operationIndex: {}", this.operationIndex);
    }

    stop() {
        this.isStopped = true;
    }
}