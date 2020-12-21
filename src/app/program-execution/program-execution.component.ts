import { Component, OnInit, NgZone } from '@angular/core';
import { WorkflowService } from '../services/workflow/workflow.service';
import { EventData} from "tns-core-modules/data/observable";
import { LogService } from '~/app/services/logging/log.service';
import { ProgramExecution } from '../services/workflow/programexecution';
import { DisplayOperation } from '../services/workflow/program';

@Component({
  selector: 'ns-program-execution',
  templateUrl: './program-execution.component.html',
  styleUrls: ['./program-execution.component.css']
})
export class ProgramExecutionComponent implements OnInit {

  buttonEnabled : boolean = true;
  buttonText : string = "Start";
  headerText : string = "";
  descriptionText : string = "";

  execution : ProgramExecution;

  constructor(
    private workflowService : WorkflowService,
    private log : LogService,
    private ngZone: NgZone) { }

  ngOnInit() {

    let self = this;
    this.workflowService.onDisplayOperation = function(operation : DisplayOperation) {
      self.onDisplayOperation(operation);
    }
  }

  onButtonPress(args : EventData) {

    if (this.buttonText == "Start") {
      this.startExecution();
    } else {
      this.stopExecution();
    }
  }

  startExecution() {

    this.log.debug("starting execution");
    this.buttonText = "Stop";

    this.execution = this.workflowService.executeProgram(this.workflowService.program);
  }

  stopExecution() {

    this.log.debug("stopping execution");
    this.buttonText = "Start";

    this.workflowService.stopExecution(this.execution);
  }

  onDisplayOperation(operation : DisplayOperation) {

    this.ngZone.run( () => {
      this.headerText = operation.getHeader();
      this.descriptionText = operation.getDescription();
    });
    
    this.log.debug("header text is now {}", this.headerText);
  }
}
