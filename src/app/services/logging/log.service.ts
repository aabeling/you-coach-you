import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LogService {

  constructor() { }

  debug(message : string, ...parts: any[]) {

    this.log("DEBUG", message, parts);
  }

  private log(level : string, message : string, parts : any[]) {

    parts.forEach(part => {
      if (part && part.toString) {
        message = message.replace('{}', part.toString())
      } else {
        message = message.replace('{}', '<undefined>');
      }
    });
    console.log(level + ": " + message);
  }
}
