import { Injectable } from '@angular/core';
import { Program, Operation, SayOperation, WaitOperation } from './program';
import { ProgramExecution } from './programexecution';
import { TextToSpeechService } from '~/app/services/text-to-speech.service';

/**
 * The WorkflowService handles the execution of the steps of exercises.
 */
@Injectable({
  providedIn: 'root'
})
export class WorkflowService {

  public program : Program = {
    name : "Test",
    operations : [
      new SayOperation("Jetzt gehen die Übungen gleich los."),
      new WaitOperation(5),
      new SayOperation("Mach dich mal fertig."),
      new WaitOperation(2),
      new SayOperation("Und das war es auch schon.")
    ]
  };

  constructor(private tts : TextToSpeechService) { }

  executeProgram(program : Program) {

    console.log("executing program: " + program.name);
    let execution : ProgramExecution = new ProgramExecution(program);

    this.handleNextOperation(execution);
  }

  private handleNextOperation(execution : ProgramExecution) {
    
    let nextOperation : Operation = execution.nextOperation();
    if (nextOperation != null) {
      let self = this;
      if (nextOperation instanceof SayOperation) {
        this.tts.say(nextOperation.text, function() {
          console.log("say ended");
          self.handleOperationEnded(execution);
        });
      } else if (nextOperation instanceof WaitOperation) {
        setTimeout(function() {
          console.log("wait ended");
          self.handleOperationEnded(execution);
        }, nextOperation.delayInSeconds * 1000);
      } else {
        console.log("unhandled operation: " + nextOperation);
      }
    } else {
      console.log("program ended");
    }
  }

  private handleOperationEnded(execution : ProgramExecution) {

    console.log("operation ended");
    execution.next();
    this.handleNextOperation(execution);
  }
}
