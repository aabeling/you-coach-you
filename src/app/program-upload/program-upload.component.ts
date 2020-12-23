import { Component, OnInit } from '@angular/core';
import { EventData} from "tns-core-modules/data/observable";
import { TextField } from 'tns-core-modules/ui/text-field';
import { LogService } from '~/app/services/logging/log.service';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { YamlParserService } from '../services/upload/yaml-parser.service';
import { ProgramManagerService } from '../services/program-manager/program-manager.service';
import { RouterExtensions } from 'nativescript-angular/router';

@Component({
  selector: 'ns-program-upload',
  templateUrl: './program-upload.component.html',
  styleUrls: ['./program-upload.component.css']
})
export class ProgramUploadComponent implements OnInit {

  /*
   * why is this necessary if the textfield value is read in uploadFromUrl?
   */
  uploadUrl : string = "https://raw.githubusercontent.com/aabeling/you-coach-you/main/examples/simple.yaml";
  isBusy : boolean = false;

  constructor(
    private log : LogService,
    private http: HttpClient,
    private yamlParser : YamlParserService,
    private programManager : ProgramManagerService,
    private router: RouterExtensions) { }

  ngOnInit() {
  }

  uploadFromUrl(event : EventData) {

    let textField = <TextField> event.object;
    let url = textField.text;
    this.log.debug("upload from url {}", url);

    this.isBusy = true;
    let headers = new HttpHeaders({    
      "Content-Type": "application/yaml",
    });
    this.http.get<string>(url, {
      headers: headers,
      observe: 'body',
      responseType: 'text' as 'json'
    }).subscribe((result) => {
      console.log(result);

      /* parse the content */
      let program = this.yamlParser.parseProgramYaml(result);
      this.programManager.storeProgram(program);
      this.isBusy = false;
      this.router.navigate(['program-manager']);
    }, (error) => {
      this.log.error("failed to load from url: {}: {}", url, error);
      console.log(error);
      // TODO show error in view
    });

  }
}
