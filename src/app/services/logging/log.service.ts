import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LogService {
  
  category: string = '';

  static getLogger(category: string) {
    let result = new LogService();
    result.category = category;
    return result;
  }

  constructor() {}

  debug(message : string, ...parts: any[]) {

    this.log("DEBUG", message, parts);
  }

  error(message : string, ...parts: any[]) {

    this.log("ERROR", message, parts);
  }

  private log(level : string, message : string, parts : any[]) {

    parts.forEach(part => {
      message = message.replace('{}', JSON.stringify(part));      
    });

    console.log(new Date().toTimeString().substr(0,8) + " " + this.category.padEnd(30,' ') + " [" + level.padStart(5,' ') + "] : " + message);
  }
}
