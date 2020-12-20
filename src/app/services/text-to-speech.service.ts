import { Injectable } from '@angular/core';
import { TNSTextToSpeech, SpeakOptions } from 'nativescript-texttospeech';

@Injectable({
  providedIn: 'root'
})
export class TextToSpeechService {

  private tts : TNSTextToSpeech;

  constructor() { 

    this.tts = new TNSTextToSpeech();
    
    /* warm up the speech synthesizer by saying nothing */
    this.say("", function() {});
  }

  say(text : string, onSayFinished? : Function) {

    console.log("say called with: " + text);

    let speakOptions: SpeakOptions = {
      text: text,
      finishedCallback: function() {
        if (onSayFinished) {
          onSayFinished();
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
