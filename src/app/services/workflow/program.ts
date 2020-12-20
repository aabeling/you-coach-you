export class Program {
    
    name : string;
    operations : Operation[];
}

export interface Operation {
    /* empty, this is only a marker interface */
}

export class SayOperation implements Operation {

    text: string;

    constructor(text : string) {
        this.text = text;
    }
}

export class WaitOperation implements Operation {

    delayInSeconds : number;

    constructor(delayInSeconds : number) {
        this.delayInSeconds = delayInSeconds;
    }
}