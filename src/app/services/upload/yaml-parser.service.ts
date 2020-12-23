import { Injectable } from '@angular/core';
import { Program } from '../workflow/program';
import { LogService } from '~/app/services/logging/log.service';
const yaml = require('js-yaml')

/**
 * Parser from programs in yaml format
 */
@Injectable({
  providedIn: 'root'
})
export class YamlParserService {
  
  constructor(private log : LogService) { }

  parseProgramYaml(content : string) : Program {

    let program = <Program> yaml.safeLoad(content);
    this.log.debug("successfully loaded yaml file");

    return program;
  }

  writeProgramYaml(program : Program) : string {

    return yaml.safeDump(program);
    
  }
}
