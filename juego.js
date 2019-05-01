class Dado{
    lanzar(){
        return Math.floor(Math.random()*6)+1;
    }
}
class Player{
    constructor(name){
        this.name=name;
        this.position=0;
    }
    walk(boxes,steps){
        this.position=boxes[this.position+steps];
    }
    getPosition(){
        return this.position;
    }
}
class Board{
    constructor(){
        this.boxes=[];
    }
    addBoxes(){
        for(var i=0;i<=106;i++){
            this.boxes.push(i);
        }
        this.addStairs();
        this.addSnakers();
    }
    addStairs(){
        this.boxes[4]=25;
        this.boxes[13]=46;
        this.boxes[42]=63;
        this.boxes[50]=69;
        this.boxes[62]=81;
        this.boxes[74]=92;
    }
    addSnakers(){
       this.boxes[40]=3;
       this.boxes[27]=5;
       this.boxes[43]=18;
       this.boxes[54]=31;
       this.boxes[66]=45;
       this.boxes[76]=58;
       this.boxes[89]=53;
       this.boxes[99]=41;
    }
}