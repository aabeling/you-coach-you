import { Component, OnInit } from '@angular/core';
import { WorkflowService } from '../services/workflow/workflow.service';
import { Button } from "tns-core-modules/ui/button";
import { EventData} from "tns-core-modules/data/observable";
import { LogService } from '~/app/services/logging/log.service';

@Component({
  selector: 'ns-program-execution',
  templateUrl: './program-execution.component.html',
  styleUrls: ['./program-execution.component.css']
})
export class ProgramExecutionComponent implements OnInit {

  constructor(
    private workflowService : WorkflowService,
    private log : LogService) { }

  ngOnInit() {
  }

  startExecution(args: EventData) {

    this.log.debug("starting execution");
    // TODO disable button or convert it to "pause"

    this.workflowService.executeProgram(this.workflowService.program);
  }
}
