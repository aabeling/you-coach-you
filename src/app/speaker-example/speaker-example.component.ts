import { Component, OnInit } from '@angular/core';
import { TextToSpeechService } from '../text-to-speech.service';

@Component({
  selector: 'ns-speaker-example',
  templateUrl: './speaker-example.component.html',
  styleUrls: ['./speaker-example.component.css']
})
export class SpeakerExampleComponent implements OnInit {

  constructor(private tts : TextToSpeechService) { }

  ngOnInit() {
  }

  /**
   * This function starts some text-to-speech output
   */
  saySomething() {

    this.tts.say("Guten Tag", function() {
      console.log("ich habe guten tag gesagt");
    });
  }
}
