import { NgModule } from "@angular/core";
import { NativeScriptRouterModule } from "nativescript-angular/router";
import { Routes } from "@angular/router";

import { SpeakerExampleComponent } from "./speaker-example/speaker-example.component";
import { ProgramExecutionComponent } from "./program-execution/program-execution.component";
import { ProgramManagerComponent } from "./program-manager/program-manager.component";

const routes: Routes = [
    { path: "", redirectTo: "/program-manager", pathMatch: "full" },
    { path: "speaker-example", component: SpeakerExampleComponent },
    { path: "program-execution", component: ProgramExecutionComponent },
    { path: "program-manager", component: ProgramManagerComponent }
];

@NgModule({
    imports: [NativeScriptRouterModule.forRoot(routes)],
    exports: [NativeScriptRouterModule]
})
export class AppRoutingModule { }
