import { Injectable } from '@angular/core';
import { Couchbase } from 'nativescript-couchbase-plugin';
import { LogService } from '~/app/services/logging/log.service';
import { WorkflowService } from '~/app/services/workflow/workflow.service';
import { Program } from '~/app/services/workflow/program';

const LOG = LogService.getLogger('ProgramManagerService');

/**
 * Provides access to a local storage of programs.
 */
@Injectable({
  providedIn: 'root'
})
export class ProgramManagerService {
    
  database: Couchbase;

  constructor(
    private workflowService : WorkflowService) { 

    this.database = new Couchbase('you-coach-you');
    LOG.debug("created database", this.database);

    /* TODO remove this: for testing a default program is added */
    let programs = this.database.query({
      select: [],
      where: [{ property: 'name', comparison: 'equalTo', value: 'Default for Testing' }]
    });
    if (programs.length == 0) {
      this.database.createDocument(workflowService.defaultProgram); 
      LOG.debug("created default program");
    }
  }

  public storeProgram(program : Program) {
    this.database.createDocument(program);
    LOG.debug("successfully stored program");
  }

  /**
   * Returns all programs from the local storage.
   */
  public getPrograms() : Promise<any[]> {

    return new Promise<any[]>((resolve, reject) => {
      let result = this.database.query({
        select: []
      });
      resolve(result);
    });
  }

  getProgram(programId: string) : Program {

    let result = <Program> this.database.getDocument(programId);

    return result;
  }
  
  deleteProgram(id: string) {

    this.database.deleteDocument(id);
    LOG.debug("program deleted: {}", id);
  }
}
