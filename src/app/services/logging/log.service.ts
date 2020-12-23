import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LogService {

  index : number = 0;

  constructor() { }

  debug(message : string, ...parts: any[]) {

    this.log("DEBUG", message, parts);
  }

  error(message : string, ...parts: any[]) {

    this.log("ERROR", message, parts);
  }

  private log(level : string, message : string, parts : any[]) {

    parts.forEach(part => {
      if (part && part.toString) {
        message = message.replace('{}', part.toString())
      } else {
        message = message.replace('{}', part);
      }
    });
    this.index++;
    console.log(this.index + " " + level + ": " + message);
  }
}
