import { Injectable } from '@angular/core';
import { Program, Operation, SayOperation, WaitOperation } from './program';
import { ProgramExecution } from './programexecution';
import { TextToSpeechService } from '~/app/services/text-to-speech.service';

/**
 * The WorkflowService handles the execution of the steps of exercises.
 */
@Injectable({
  providedIn: 'root'
})
export class WorkflowService {

  public program : Program = {
    name : "Test",
    operations : [
      new SayOperation("Die Übungen gehen in 10 Sekunden los."),
      new WaitOperation(10),
      // Uebung 1
      new SayOperation("Übung 1. Entspannung. Füße mit leichtem Druck gegen die Wand und die "
        + "Wirbelsäule gegen den Boden pressen. Danach Spannung wieder abbauen."),
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
      new SayOperation("Übung 2. Grundspannung Rückenlage. Fußspitzen anziehen, Fersen auf den Boden drücken, "
        + "Bauch- und Gesäßmuskulatur anspannen und Lendenwirbelsäule auf den Boden pressen."),
      new WaitOperation(5),
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
      new SayOperation("Übung 3. Rückenlage. Kopf und Schulter anheben, dann Arme leicht anheben "
        + "und gegen einen gedachten Widerstand drücken."),
      new WaitOperation(5),
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
      new SayOperation("Übung 4. Grundspannung Rückenlage. "
        + "Mit der rechten Hand das linke Bein berühren und 10 Sekunden halten, "
        + "für die andere Seite Übung wiederholen."),
      new WaitOperation(5),
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
      // Uebung 5
      new SayOperation("Übung 5. Rückenlage. "
        + "Linken Arm und rechtes Bein auf den Boden drücken, mit der rechten Hand gegen das linke Bein drücken, "
        + "danach Seitenwechsel."),
      new WaitOperation(5),
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
      new SayOperation("Übung 6. Rückenlage. Gesäß und Wirbelsäule anheben und Bauch- und Gesäßmuskulatur anspannen."),
      new WaitOperation(5),
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
      new SayOperation("Übung 7. Rückenlage. Knie mit beiden Händen umfassen und zur Brust ziehen, "
        + "Arme danach strecken und Knie gegen den Händewiderstand drücken."),
      new WaitOperation(5),
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
      // Uebung 8
      new SayOperation("Übung 8. Grundspannung Bauchlage. Fersen wegdrücken, Kopf leicht anheben. "
        + "Hals nicht überstrecken."),
      new WaitOperation(5),
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
      new SayOperation("Übung 9. Bauchlage. Arme in U-Form anheben und die Schulterblätter Richtung Wirbelsäule zusammenschieben."),
      new WaitOperation(5),
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
      new SayOperation("Übung 10. Bauchlage. Arme und Oberkörper leicht anheben und nach beiden Seiten leicht verlagern."),
      new WaitOperation(5),
      new SayOperation("Es geht los in drei, zwei, eins."),
      new SayOperation("Anheben für 30 Sekunden."),
      new WaitOperation(30),
      new SayOperation("Und entspannen."),
      // Uebung 11
      new SayOperation("Übung 11. Vierfüßlerstand. Beine und Arme in der Waagerechten halten."),
      new WaitOperation(5),
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
      new SayOperation("Übung 11. Vierfüßlerstand. Katzenbucke bilden."),
      new WaitOperation(5),
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

  constructor(private tts : TextToSpeechService) { }

  executeProgram(program : Program) {

    console.log("executing program: " + program.name);
    let execution : ProgramExecution = new ProgramExecution(program);

    this.handleNextOperation(execution);
  }

  private handleNextOperation(execution : ProgramExecution) {
    
    let nextOperation : Operation = execution.nextOperation();
    if (nextOperation != null) {
      let self = this;
      if (nextOperation instanceof SayOperation) {
        this.tts.say(nextOperation.text, function() {
          console.log("say ended");
          self.handleOperationEnded(execution);
        });
      } else if (nextOperation instanceof WaitOperation) {
        setTimeout(function() {
          console.log("wait ended");
          self.handleOperationEnded(execution);
        }, nextOperation.delayInSeconds * 1000);
      } else {
        console.log("unhandled operation: " + nextOperation);
      }
    } else {
      console.log("program ended");
    }
  }

  private handleOperationEnded(execution : ProgramExecution) {

    console.log("operation ended");
    execution.next();
    this.handleNextOperation(execution);
  }
}
