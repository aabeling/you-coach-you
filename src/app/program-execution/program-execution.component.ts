import { Component, OnInit, OnDestroy, NgZone } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EventData} from "tns-core-modules/data/observable";
import { WorkflowService } from '~/app/services/workflow/workflow.service';
import { ProgramManagerService } from '~/app/services/program-manager/program-manager.service';
import { LogService } from '~/app/services/logging/log.service';
import { ProgramExecution } from '~/app/services/workflow/programexecution';
import { DisplayOperation } from '~/app/services/workflow/program';
import { YamlParserService } from '~/app/services/upload/yaml-parser.service';
import { alert } from 'tns-core-modules/ui/dialogs';
import { RouterExtensions } from 'nativescript-angular/router';

const LOG = LogService.getLogger('ProgramExecutionComponent');

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
    private ngZone: NgZone,
    private route: ActivatedRoute,
    private programManager : ProgramManagerService,
    private yamlParser : YamlParserService,
    private routerExtensions: RouterExtensions) { }

  ngOnInit() {

    LOG.debug("ProgramExecutionComponent#ngOnInit");

    let self = this;
    this.workflowService.onDisplayOperation = function(operation : DisplayOperation) {
      self.onDisplayOperation(operation);
    }
    this.workflowService.onProgramEnded = function() {
      self.onProgramEnded();
    };

    this.sub = this.route.params.subscribe(params => {
      this.programId = params['id'];
      LOG.debug("component created for programId {}", this.programId);
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

    LOG.debug("starting execution");
    this.buttonText = "Stop";

    /* TODO remove this output */
    //let yamlDump = this.yamlParser.writeProgramYaml(program);
    //LOG.debug("yaml dump: {}", yamlDump);

    //let dump = this.yamlParser.writeProgramYaml(this.workflowService.program);
    //dump.split('\n', 10000000).forEach(line => console.log(line));

    this.execution = this.workflowService.executeProgram(program);
  }

  stopExecution() {

    LOG.debug("stopping execution");
    this.buttonText = "Start";

    this.workflowService.stopExecution(this.execution);
  }

  onDisplayOperation(operation : DisplayOperation) {

    this.ngZone.run( () => {
      this.headerText = operation.header;
      this.descriptionText = operation.description;
    });
    
    LOG.debug("header text is now {}", this.headerText);
  }

  onProgramEnded() {

    this.ngZone.run( () => {
      LOG.debug("program ended");
      this.buttonText = "Start";
    });
    
  }

  onNavBtnTap() {
    LOG.debug("Navigation button tapped!");
    this.routerExtensions.back();
  }
}
