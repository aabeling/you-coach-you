import { Component, OnInit } from '@angular/core';
import { TextToSpeechService } from '../services/text-to-speech.service';
import { TextField } from "tns-core-modules/ui/text-field";
import { LogService } from '~/app/services/logging/log.service';

const LOG = LogService.getLogger('SpeakerExampleComponent');

@Component({
  selector: 'ns-speaker-example',
  templateUrl: './speaker-example.component.html',
  styleUrls: ['./speaker-example.component.css']
})
export class SpeakerExampleComponent implements OnInit {

  constructor(
    private tts : TextToSpeechService) { }

  ngOnInit() {
  }

  /**
   * This function starts some text-to-speech output
   */
  saySomething(text : string) {

    let self = this;
    this.tts.say(text, function() {
      LOG.debug("ich habe gesprochen");
    });
  }

  onReturnPress(args) {
    let textField = <TextField>args.object;
    this.saySomething(textField.text);
  }
}
