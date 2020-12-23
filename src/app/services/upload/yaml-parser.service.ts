import { Injectable } from '@angular/core';
import { Program } from '../workflow/program';
import { LogService } from '~/app/services/logging/log.service';
const yaml = require('js-yaml')

const LOG = LogService.getLogger('YamlParserService');

/**
 * Parser from programs in yaml format
 */
@Injectable({
  providedIn: 'root'
})
export class YamlParserService {
  
  constructor() { }

  parseProgramYaml(content : string) : Program {

    let program = <Program> yaml.safeLoad(content);
    LOG.debug("successfully parsed yaml file");

    return program;
  }

  writeProgramYaml(program : Program) : string {

    LOG.debug("writing program {} with {} operations", program.name, program.operations.length);
    return yaml.safeDump(program);    
  }
}
