import { Injectable } from '@angular/core';
import { TNSTextToSpeech, SpeakOptions } from 'nativescript-texttospeech';

@Injectable({
  providedIn: 'root'
})
export class TextToSpeechService {

  private tts : TNSTextToSpeech = new TNSTextToSpeech();

  constructor() { 

    /* warm up the speech synthesizer by saying nothing */
    this.say("");
  }

  say(text : string, finishedCallback? : Function) {

    console.log("say called with: " + text);

    let speakOptions: SpeakOptions = {
      text: text,
      finishedCallback: function() {
        if (finishedCallback) {
          finishedCallback();
        }
      }
    }

    this.tts.speak(speakOptions).then(() => {
      console.log("speak successful");
    }, (err) => {
      console.log("speak failed: " + err);
    });
  }
}
