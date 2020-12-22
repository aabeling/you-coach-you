export class Program {
    
    name : string;
    operations : Operation[];
}

export interface Operation {
    
    name : string;
}

export class SayOperation implements Operation {

    name: string = "say";
    text: string;

    constructor(text : string) {
        this.text = text;
    }
}

export class WaitOperation implements Operation {

    name: string = "wait";
    delayInSeconds : number;

    constructor(delayInSeconds : number) {
        this.delayInSeconds = delayInSeconds;
    }
}

export class DisplayOperation implements Operation {

    name: string = "display";
    header : string;
    description : string;

    constructor(header : string, description : string) {}    
}