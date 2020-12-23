import { Injectable } from '@angular/core';
import { TNSTextToSpeech, SpeakOptions } from 'nativescript-texttospeech';
import { LogService } from '~/app/services/logging/log.service';

const LOG = LogService.getLogger('TextToSpeechService');

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

    LOG.debug("say called with: {}", text);

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
      LOG.debug("speak successful");
    }, (err) => {
      LOG.debug("speak failed: {}", err);
    });
  }
}
