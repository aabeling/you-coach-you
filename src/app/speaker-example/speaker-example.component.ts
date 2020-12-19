import { Component, OnInit } from '@angular/core';
import { TNSTextToSpeech, SpeakOptions } from 'nativescript-texttospeech';

@Component({
  selector: 'ns-speaker-example',
  templateUrl: './speaker-example.component.html',
  styleUrls: ['./speaker-example.component.css']
})
export class SpeakerExampleComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  /**
   * This function starts some text-to-speech output
   */
  saySomething() {
    console.log("say something");

    let TTS = new TNSTextToSpeech();
    //TTS.getAvailableLanguages().
    let speakOptions: SpeakOptions = {
        text: 'Hallo Achim du alter Sack'
    }

    // Call the `speak` method passing the SpeakOptions object
    TTS.speak(speakOptions).then(() => {
        console.log("fine");
        alert("everything is fine");
    }, (err) => {
    console.log("failed");
        alert("something failed: " + err);
    });

    console.log("saying something finished");
  }
}
