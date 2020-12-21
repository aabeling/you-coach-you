import { Component, OnInit } from "@angular/core";
import { keepAwake, allowSleepAgain } from "nativescript-insomnia";
import { LogService } from '~/app/services/logging/log.service';

@Component({
    selector: "ns-app",
    templateUrl: "./app.component.html"
})
export class AppComponent implements OnInit {

    constructor(private log : LogService) {}

    ngOnInit(): void {    
        
        /* keep the screen from getting inactive */
        let self = this;
        keepAwake().then(function() {
            self.log.debug("Insomnia is active");
        })
    } 

}
