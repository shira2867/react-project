export class CharModel{
    char:string
    bold:number
    size:number
    color:string
    capsLock:boolean
    constructor(   char:string,bold:number,size:number,color:string ,capsLock:boolean
    ) {
        this.char=char;
        this.bold=bold;
        this.size=size;
        this.color=color;
        this.capsLock=capsLock;
    }
}