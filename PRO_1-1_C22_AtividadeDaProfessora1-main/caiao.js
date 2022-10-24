class caiao{
    constructor(a,b,c,d,e){
        this.xix=a
        this.ipicilon=b
        this.largura=c
        this.atura=d
        this.angulo=e
        this.image= loadImage("./assets/canon.png")
        this.image1= loadImage("/assets/cannonBase.png")
    }
    display(){
        console.log("display") 
     push();  
    rectMode(CENTER)
     image(this.image, this.xix, this.ipicilon, this.largura, this.atura)
     pop(); 
    image(this.image1,60,80,200,200)}
}