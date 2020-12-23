import { Injectable } from '@angular/core';
import { Program, Operation, SayOperation, WaitOperation, DisplayOperation } from './program';
import { ProgramExecution } from './programexecution';
import { TextToSpeechService } from '~/app/services/text-to-speech.service';
import { LogService } from '~/app/services/logging/log.service';

/**
 * The WorkflowService handles the execution of the steps of exercises.
 */
@Injectable({
  providedIn: 'root'
})
export class WorkflowService {

  public defaultProgram : Program = {
    name : "Default for Testing",
    operations : [
      new DisplayOperation("Header", "Description"),
      new SayOperation("Hallo du"),
      new WaitOperation(3),
      new SayOperation("Ende")
    ]
  };

  public program : Program = {
    name : "Rückentraining für die Lendenwirbelsäule",
    operations : [
      new DisplayOperation("Fertig machen!", ""),
      new SayOperation("Die Übungen gehen in 10 Sekunden los."),
      new WaitOperation(10),
      // Uebung 1
      new DisplayOperation("Übung 1: Entspannung", "Füße mit leichtem Druck gegen die Wand und die "
        + "Wirbelsäule gegen den Boden pressen. Danach Spannung wieder abbauen."),
      new SayOperation("Übung 1. Entspannung. Füße mit leichtem Druck gegen die Wand und die "
        + "Wirbelsäule gegen den Boden pressen. Danach Spannung wieder abbauen."),
      new WaitOperation(3),
      new SayOperation("Es geht los in drei, zwei, eins."),
      new SayOperation("Erste Wiederholung. Anspannen."),
      new WaitOperation(10),
      new SayOperation("Und entspannen."),
      new WaitOperation(5),
      new SayOperation("Zweite Wiederholung. Anspannen."),
      new WaitOperation(10),
      new SayOperation("Und entspannen."),
      new WaitOperation(5),
      new SayOperation("Dritte Wiederholung. Anspannen."),
      new WaitOperation(10),
      new SayOperation("Und entspannen."),
      new WaitOperation(5),
      // Uebung 2
      new DisplayOperation("Übung 2. Grundspannung Rückenlage", "Fußspitzen anziehen, Fersen auf den Boden drücken, "
      + "Bauch- und Gesäßmuskulatur anspannen und Lendenwirbelsäule auf den Boden pressen."),
      new SayOperation("Übung 2. Grundspannung Rückenlage. Fußspitzen anziehen, Fersen auf den Boden drücken, "
        + "Bauch- und Gesäßmuskulatur anspannen und Lendenwirbelsäule auf den Boden pressen."),
      new WaitOperation(3),
      new SayOperation("Es geht los in drei, zwei, eins."),
      new SayOperation("Erste Wiederholung. Anspannen."),
      new WaitOperation(10),
      new SayOperation("Und entspannen."),
      new WaitOperation(5),
      new SayOperation("Zweite Wiederholung. Anspannen."),
      new WaitOperation(10),
      new SayOperation("Und entspannen."),
      new WaitOperation(5),
      new SayOperation("Dritte Wiederholung. Anspannen."),
      new WaitOperation(10),
      new SayOperation("Und entspannen."),
      new WaitOperation(5),
      // Uebung 3
      new DisplayOperation("Übung 3. Rückenlage",""),
      new SayOperation("Übung 3. Rückenlage. Kopf und Schulter anheben, dann Arme leicht anheben "
        + "und gegen einen gedachten Widerstand drücken."),
      new WaitOperation(3),
      new SayOperation("Es geht los in drei, zwei, eins."),
      new SayOperation("Erste Wiederholung. Anspannen."),
      new WaitOperation(10),
      new SayOperation("Und entspannen."),
      new WaitOperation(5),
      new SayOperation("Zweite Wiederholung. Anspannen."),
      new WaitOperation(10),
      new SayOperation("Und entspannen."),
      new WaitOperation(5),
      new SayOperation("Dritte Wiederholung. Anspannen."),
      new WaitOperation(10),
      new SayOperation("Und entspannen."),
      new WaitOperation(5),
      // Uebung 4
      new DisplayOperation("Übung 4. Grundspannung Rückenlage",""),
      new SayOperation("Übung 4. Grundspannung Rückenlage. "
        + "Mit der rechten Hand das linke Bein berühren und 10 Sekunden halten, "
        + "für die andere Seite Übung wiederholen."),
      new WaitOperation(3),
      new SayOperation("Es geht los in drei, zwei, eins."),
      new SayOperation("Erste Wiederholung links."),
      new WaitOperation(10),
      new SayOperation("Und entspannen."),
      new WaitOperation(3),
      new SayOperation("Erste Wiederholung rechts."),
      new WaitOperation(10),
      new SayOperation("Und entspannen."),
      new WaitOperation(3),
      new SayOperation("Zweite Wiederholung links."),
      new WaitOperation(10),
      new SayOperation("Und entspannen."),
      new WaitOperation(3),
      new SayOperation("Zweite Wiederholung rechts."),
      new WaitOperation(10),
      new SayOperation("Und entspannen."),
      new WaitOperation(3),
      new SayOperation("Dritte Wiederholung links."),
      new WaitOperation(10),
      new SayOperation("Und entspannen."),
      new WaitOperation(3),
      new SayOperation("Dritte Wiederholung rechts."),
      new WaitOperation(10),
      new SayOperation("Und entspannen."),
      new WaitOperation(3),
      // Uebung 5
      new DisplayOperation("Übung 5. Rückenlage",""),
      new SayOperation("Übung 5. Rückenlage. "
        + "Linken Arm und rechtes Bein auf den Boden drücken, mit der rechten Hand gegen das linke Bein drücken, "
        + "danach Seitenwechsel."),
      new WaitOperation(3),
      new SayOperation("Es geht los in drei, zwei, eins."),
      new SayOperation("Erste Wiederholung links."),
      new WaitOperation(10),
      new SayOperation("Erste Wiederholung rechts."),
      new WaitOperation(10),
      new SayOperation("Zweite Wiederholung links."),
      new WaitOperation(10),
      new SayOperation("Zweite Wiederholung rechts."),
      new WaitOperation(10),
      new SayOperation("Dritte Wiederholung links."),
      new WaitOperation(10),
      new SayOperation("Dritte Wiederholung rechts."),
      new WaitOperation(5),
      // Uebung 6
      new DisplayOperation("Übung 6. Rückenlage",""),
      new SayOperation("Übung 6. Rückenlage. Gesäß und Wirbelsäule anheben und Bauch- und Gesäßmuskulatur anspannen."),
      new WaitOperation(3),
      new SayOperation("Es geht los in drei, zwei, eins."),
      new SayOperation("Erste Wiederholung. Anspannen."),
      new WaitOperation(10),
      new SayOperation("Und entspannen."),
      new WaitOperation(5),
      new SayOperation("Zweite Wiederholung. Anspannen."),
      new WaitOperation(10),
      new SayOperation("Und entspannen."),
      new WaitOperation(5),
      new SayOperation("Dritte Wiederholung. Anspannen."),
      new WaitOperation(10),
      new SayOperation("Und entspannen."),
      new WaitOperation(5),
      // Uebung 7
      new DisplayOperation("Übung 7. Rückenlage",""),
      new SayOperation("Übung 7. Rückenlage. Knie mit beiden Händen umfassen und zur Brust ziehen, "
        + "Arme danach strecken und Knie gegen den Händewiderstand drücken."),
      new WaitOperation(3),
      new SayOperation("Es geht los in drei, zwei, eins."),
      new SayOperation("Mit dem linken Bein."),
      new WaitOperation(30),
      new SayOperation("Mit dem rechten Bein."),
      new WaitOperation(30),
      new SayOperation("Und entspannen."),
      new WaitOperation(5),
      // Uebung 8
      new DisplayOperation("Übung 8. Grundspannung Bauchlage",""),
      new SayOperation("Übung 8. Grundspannung Bauchlage. Fersen wegdrücken, Kopf leicht anheben. "
        + "Hals nicht überstrecken."),
      new WaitOperation(3),
      new SayOperation("Es geht los in drei, zwei, eins."),
      new SayOperation("Erste Wiederholung. Anspannen."),
      new WaitOperation(10),
      new SayOperation("Und entspannen."),
      new WaitOperation(5),
      new SayOperation("Zweite Wiederholung. Anspannen."),
      new WaitOperation(10),
      new SayOperation("Und entspannen."),
      new WaitOperation(5),
      new SayOperation("Dritte Wiederholung. Anspannen."),
      new WaitOperation(10),
      new SayOperation("Und entspannen."),
      new WaitOperation(5),
      // Uebung 9
      new DisplayOperation("Übung 9. Bauchlage",""),
      new SayOperation("Übung 9. Bauchlage. Arme in U-Form anheben und die Schulterblätter Richtung Wirbelsäule zusammenschieben."),
      new WaitOperation(3),
      new SayOperation("Es geht los in drei, zwei, eins."),
      new SayOperation("Erste Wiederholung. Anspannen."),
      new WaitOperation(10),
      new SayOperation("Und entspannen."),
      new WaitOperation(5),
      new SayOperation("Zweite Wiederholung. Anspannen."),
      new WaitOperation(10),
      new SayOperation("Und entspannen."),
      new WaitOperation(5),
      new SayOperation("Dritte Wiederholung. Anspannen."),
      new WaitOperation(10),
      new SayOperation("Und entspannen."),
      new WaitOperation(5),
      // Uebung 10
      new DisplayOperation("Übung 10. Bauchlage",""),
      new SayOperation("Übung 10. Bauchlage. Arme und Oberkörper leicht anheben und nach beiden Seiten leicht verlagern."),
      new WaitOperation(3),
      new SayOperation("Es geht los in drei, zwei, eins."),
      new SayOperation("Anheben für 30 Sekunden."),
      new WaitOperation(30),
      new SayOperation("Und entspannen."),
      // Uebung 11
      new DisplayOperation("Übung 11. Vierfüßlerstand",""),
      new SayOperation("Übung 11. Vierfüßlerstand. Beine und Arme in der Waagerechten halten."),
      new WaitOperation(3),
      new SayOperation("Es geht los in drei, zwei, eins."),
      new SayOperation("Erste Wiederholung links."),
      new WaitOperation(10),
      new SayOperation("Erste Wiederholung rechts."),
      new WaitOperation(10),
      new SayOperation("Zweite Wiederholung links."),
      new WaitOperation(10),
      new SayOperation("Zweite Wiederholung rechts."),
      new WaitOperation(10),
      new SayOperation("Dritte Wiederholung links."),
      new WaitOperation(10),
      new SayOperation("Dritte Wiederholung rechts."),
      new WaitOperation(5),
      // Uebung 12
      new DisplayOperation("Übung 12. Vierfüßlerstand",""),
      new SayOperation("Übung 12. Vierfüßlerstand. Katzenbuckel bilden."),
      new WaitOperation(3),
      new SayOperation("Es geht los in drei, zwei, eins."),
      new SayOperation("Erste Wiederholung. Anspannen."),
      new WaitOperation(10),
      new SayOperation("Und entspannen."),
      new WaitOperation(5),
      new SayOperation("Zweite Wiederholung. Anspannen."),
      new WaitOperation(10),
      new SayOperation("Und entspannen."),
      new WaitOperation(5),
      new SayOperation("Dritte Wiederholung. Anspannen."),
      new WaitOperation(10),
      new SayOperation("Und entspannen."),
      new WaitOperation(5),
      // Ende
      new SayOperation("Und das war es auch schon.")
    ]
  };

  public onDisplayOperation : Function = undefined;
  public onProgramEnded: Function = undefined;

  constructor(
    private tts : TextToSpeechService,
    private log : LogService) { }

  executeProgram(program : Program) : ProgramExecution {

    this.log.debug("executing program: {}", program.name);
    let execution : ProgramExecution = new ProgramExecution(program, this.log);

    this.handleNextOperation(execution);

    return execution;
  }

  stopExecution(execution : ProgramExecution) {

    this.log.debug("stopping execution");
    execution.stop();
  }

  private handleNextOperation(execution : ProgramExecution) {
    
    if (execution.isStopped) {
      this.log.debug("execution is stopped");
      return;
    }
    
    let nextOperation : Operation = execution.nextOperation();
    if (nextOperation != null) {
      let self = this;
      if (nextOperation.name == 'say') {
        let sayOperation = <SayOperation> nextOperation;
        this.tts.say(sayOperation.text, function() {
          self.log.debug("say ended");
          self.handleOperationEnded(execution);
        });
      } else if (nextOperation.name == "wait") {
        let waitOperation = <WaitOperation> nextOperation;
        setTimeout(function() {
          self.log.debug("wait ended");
          self.handleOperationEnded(execution);
        }, waitOperation.delayInSeconds * 1000);
      } else if (nextOperation.name == "display") {
        if (this.onDisplayOperation) {
          let displayOperation = <DisplayOperation> nextOperation;
          this.onDisplayOperation(displayOperation);
          this.handleOperationEnded(execution);
        }
      } else {
        this.log.debug("unhandled operation: {}", nextOperation);
      }
    } else {
      this.log.debug("program ended");
      if (this.onProgramEnded) {
        this.onProgramEnded();
      }
    }
  }

  private handleOperationEnded(execution : ProgramExecution) {

    this.log.debug("operation ended");
    execution.next();
    this.handleNextOperation(execution);
  }
}
