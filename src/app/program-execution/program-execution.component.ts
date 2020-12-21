import { Component, OnInit } from '@angular/core';
import { WorkflowService } from '../services/workflow/workflow.service';
import { Button } from "tns-core-modules/ui/button";
import { EventData} from "tns-core-modules/data/observable";
import { LogService } from '~/app/services/logging/log.service';
import { ProgramExecution } from '../services/workflow/programexecution';

@Component({
  selector: 'ns-program-execution',
  templateUrl: './program-execution.component.html',
  styleUrls: ['./program-execution.component.css']
})
export class ProgramExecutionComponent implements OnInit {

  buttonEnabled : boolean = true;
  buttonText : string = "Start";
  execution : ProgramExecution;

  constructor(
    private workflowService : WorkflowService,
    private log : LogService) { }

  ngOnInit() {
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
}
