import { NgModule } from "@angular/core";
import { NativeScriptRouterModule } from "nativescript-angular/router";
import { Routes } from "@angular/router";

import { SpeakerExampleComponent } from "./speaker-example/speaker-example.component";

const routes: Routes = [
    { path: "", redirectTo: "/speaker-example", pathMatch: "full" },
    { path: "speaker-example", component: SpeakerExampleComponent }
];

@NgModule({
    imports: [NativeScriptRouterModule.forRoot(routes)],
    exports: [NativeScriptRouterModule]
})
export class AppRoutingModule { }
