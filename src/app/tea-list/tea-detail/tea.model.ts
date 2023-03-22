export class Tea {
    public name: string;
    public type: string;
    public caffeine: string;
    public imagePath: string;
    public id: number;

    constructor(name: string, type: string, caffeine: string, imagePath: string, id: number) {
        this.name = name;
        this.type = type;
        this.caffeine = caffeine;
        this.imagePath = imagePath; 
        this.id = id; 
    }
}