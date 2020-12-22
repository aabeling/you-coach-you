import { Component, OnInit, NgZone } from '@angular/core';
import { ProgramManagerService } from '~/app/services/program-manager/program-manager.service';
import { LogService } from '~/app/services/logging/log.service';
import { EventData} from "tns-core-modules/data/observable";
import { confirm } from "tns-core-modules/ui/dialogs";
import { RouterExtensions } from 'nativescript-angular/router';

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
    private log : LogService,
    private router: RouterExtensions) { }

  ngOnInit() {

    /* load programs */
    this.programManager.getPrograms().then(programs => {
      this.ngZone.run( () => {
        this.programs = [];        
        this.log.debug("loaded programs from local storage");
        programs.forEach(program => { 
          this.log.debug("program: {}", program.name);
          this.programs.push(program);
        });
      });
    });
  }


  deleteProgram(args : EventData) {

    let target = args.object;
    let programId = target.get('programId');
    let programName = target.get('programName');
    this.log.debug("confirm delete program: {} {}", programId, programName);

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

    this.log.debug("select program: {}", programId);
    this.router.navigate(['program-execution', {id : programId}]);
  }

  createProgram() {

    this.log.debug("create program");
  }
}
