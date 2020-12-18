import { Component, OnInit } from '@angular/core';

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
  }
}
