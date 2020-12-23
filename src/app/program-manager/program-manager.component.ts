import { Component, OnInit, NgZone } from '@angular/core';
import { ProgramManagerService } from '~/app/services/program-manager/program-manager.service';
import { LogService } from '~/app/services/logging/log.service';
import { EventData} from "tns-core-modules/data/observable";
import { confirm } from "tns-core-modules/ui/dialogs";
import { RouterExtensions } from 'nativescript-angular/router';

const LOG = LogService.getLogger('ProgramManagerComponent');

@Component({
  selector: 'ns-program-manager',
  templateUrl: './program-manager.component.html',
  styleUrls: ['./program-manager.component.css']
})
export class ProgramManagerComponent implements OnInit {

  programs: any[] = [];

  constructor(
    private programManager : ProgramManagerService,
    private ngZone: NgZone,
    private router: RouterExtensions) { }

  ngOnInit() {

    /* load programs */
    this.programManager.getPrograms().then(programs => {
      this.ngZone.run( () => {
        this.programs = [];        
        LOG.debug("loaded programs from local storage");
        programs.forEach(program => { 
          LOG.debug("program: {}", program.name);
          this.programs.push(program);
        });
      });
    });
  }


  deleteProgram(args : EventData) {

    let target = args.object;
    let programId = target.get('programId');
    let programName = target.get('programName');
    LOG.debug("confirm delete program: {} {}", programId, programName);

    let options = {
      title: "Programm löschen",
      message: "Soll das Programm '" + programName + "' wirklich gelöscht werden?",
      okButtonText: "Ja",
      neutralButtonText: "Doch nicht"
    };
  
    confirm(options).then((result: boolean) => {
        if (result) {
          this.programManager.deleteProgram(programId);
          this.ngOnInit();
        }
    });
  
  }

  selectProgram(args : EventData) {

    let target = args.object;
    let programId = target.get('programId');

    LOG.debug("select program: {}", programId);
    this.router.navigate(['program-execution', {id : programId}]);
  }

  createProgram() {

    LOG.debug("create program");
    this.router.navigate(['program-upload']);
  }
}
