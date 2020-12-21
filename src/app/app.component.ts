import { Component, OnInit } from "@angular/core";
import { keepAwake, allowSleepAgain } from "nativescript-insomnia";

@Component({
    selector: "ns-app",
    templateUrl: "./app.component.html"
})
export class AppComponent implements OnInit {

    ngOnInit(): void {    
        
        /* keep the screen from getting inactive */
        keepAwake().then(function() {
            console.log("Insomnia is active");
        })
    } 

}
