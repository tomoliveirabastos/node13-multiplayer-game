class Food{
    constructor(){
        this.x = 0;
        this.y = 0;
        this.size = 20;
    }
    render(){
        let img = new Image();
        img.src = "sprite/cristal.png";
        ctx.drawImage(img,this.x, this.y, this.size, this.size);
    }
}
let food = new Food();