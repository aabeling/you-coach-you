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

    public toString(): string {
        return "SayOperation(text=" + this.text + ")";
    }
}

export class WaitOperation implements Operation {

    delayInSeconds : number;

    constructor(delayInSeconds : number) {
        this.delayInSeconds = delayInSeconds;
    }

    public toString(): string {
        return "WaitOperation(delayInSeconds=" + this.delayInSeconds + ")";
    }
}

export class DisplayOperation implements Operation {

    constructor(private header : string, private description : string) {}

    getHeader() {
        return this.header;
    }

    getDescription() {
        return this.description;
    }
    
    public toString(): string {
        return "DisplayOperation(header=" + this.header 
            + ", description=" + this.description + ")";
    }
}