import { Injectable } from '@angular/core';
import { Couchbase } from 'nativescript-couchbase-plugin';
import { LogService } from '~/app/services/logging/log.service';

/**
 * Provides access to a local storage of programs.
 */
@Injectable({
  providedIn: 'root'
})
export class ProgramManagerService {
    
  database: Couchbase;

  constructor(private log : LogService) { 
    this.database = new Couchbase('you-coach-you');
    this.log.debug("created database", this.database);

//    let id = Math.floor(Math.random() * 1000);
//    this.database.createDocument({
//      "name": "program" + id
//    });
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

  deleteProgram(id: string) {

    this.database.deleteDocument(id);
    this.log.debug("program deleted: {}", id);
  }
}
