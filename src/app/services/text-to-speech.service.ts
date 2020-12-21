import { Injectable } from '@angular/core';
import { TNSTextToSpeech, SpeakOptions } from 'nativescript-texttospeech';
import { LogService } from '~/app/services/logging/log.service';

@Injectable({
  providedIn: 'root'
})
export class TextToSpeechService {

  private tts : TNSTextToSpeech;

  constructor(private log : LogService) { 

    this.tts = new TNSTextToSpeech();
    
    /* warm up the speech synthesizer by saying nothing */
    this.say("", function() {});
  }

  say(text : string, onSayFinished? : Function) {

    this.log.debug("say called with: {}", text);

    let speakOptions: SpeakOptions = {
      text: text,
      finishedCallback: function() {
        if (onSayFinished) {
          onSayFinished();
        }
      }
    }

    let self = this;
    this.tts.speak(speakOptions).then(() => {
      self.log.debug("speak successful");
    }, (err) => {
      self.log.debug("speak failed: {}", err);
    });
  }
}
