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
        text: 'Ute du bist eine liebe Maus'
    }

    // Call the `speak` method passing the SpeakOptions object
    TTS.speak(speakOptions).then(() => {
        console.log("successfully spoken");
    }, (err) => {
        alert("failed to speak: " + err);
    });

    console.log("saying something finished");
  }
}
