class Enemy{
    constructor(){
        this.x = 0;
        this.y = 0;
        this.size = 0;
    }

    render(){
        let img = new Image();
        img.src = "sprite/enemy.png";
        ctx.drawImage(img,this.x, this.y, this.size, this.size)
    }
}
let enemy = new Enemy();