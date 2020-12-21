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
      message = message.replace('{}', part.toString())
    });
    console.log(level + ": " + message);
  }
}
