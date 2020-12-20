import { NgModule } from "@angular/core";
import { NativeScriptRouterModule } from "nativescript-angular/router";
import { Routes } from "@angular/router";

import { SpeakerExampleComponent } from "./speaker-example/speaker-example.component";
import { ProgramExecutionComponent } from "./program-execution/program-execution.component";

const routes: Routes = [
    { path: "", redirectTo: "/program-execution", pathMatch: "full" },
    { path: "speaker-example", component: SpeakerExampleComponent },
    { path: "program-execution", component: ProgramExecutionComponent }
];

@NgModule({
    imports: [NativeScriptRouterModule.forRoot(routes)],
    exports: [NativeScriptRouterModule]
})
export class AppRoutingModule { }
