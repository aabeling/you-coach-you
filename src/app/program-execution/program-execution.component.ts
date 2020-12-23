import { Component, OnInit, OnDestroy, NgZone } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EventData} from "tns-core-modules/data/observable";
import { WorkflowService } from '~/app/services/workflow/workflow.service';
import { ProgramManagerService } from '~/app/services/program-manager/program-manager.service';
import { LogService } from '~/app/services/logging/log.service';
import { ProgramExecution } from '~/app/services/workflow/programexecution';
import { DisplayOperation } from '~/app/services/workflow/program';
import { YamlParserService } from '~/app/services/upload/yaml-parser.service';


@Component({
  selector: 'ns-program-execution',
  templateUrl: './program-execution.component.html',
  styleUrls: ['./program-execution.component.css']
})
export class ProgramExecutionComponent implements OnInit, OnDestroy {

  buttonEnabled : boolean = true;
  buttonText : string = "Start";
  headerText : string = "";
  descriptionText : string = "";
  execution : ProgramExecution;
  private sub : any;
  private programId : string;

  constructor(
    private workflowService : WorkflowService,
    private log : LogService,
    private ngZone: NgZone,
    private route: ActivatedRoute,
    private programManager : ProgramManagerService,
    private yamlParser : YamlParserService) { }

  ngOnInit() {

    this.log.debug("ProgramExecutionComponent#ngOnInit");

    let self = this;
    this.workflowService.onDisplayOperation = function(operation : DisplayOperation) {
      self.onDisplayOperation(operation);
    }

    this.sub = this.route.params.subscribe(params => {
      this.programId = params['id'];
      this.log.debug("component created for programId {}", this.programId);
   });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

  onButtonPress(args : EventData) {

    if (this.buttonText == "Start") {
      this.startExecution();
    } else {
      this.stopExecution();
    }
  }

  startExecution() {

    let program = this.programManager.getProgram(this.programId);

    this.log.debug("starting execution");
    this.buttonText = "Stop";

    /* TODO remove this output */
    let yamlDump = this.yamlParser.writeProgramYaml(program);
    this.log.debug("yaml dump: {}", yamlDump);

    this.execution = this.workflowService.executeProgram(program);
  }

  stopExecution() {

    this.log.debug("stopping execution");
    this.buttonText = "Start";

    this.workflowService.stopExecution(this.execution);
  }

  onDisplayOperation(operation : DisplayOperation) {

    this.ngZone.run( () => {
      this.headerText = operation.header;
      this.descriptionText = operation.description;
    });
    
    this.log.debug("header text is now {}", this.headerText);
  }
}
