class Player{
    constructor(){
        this.x = 0;
        this.y = 0;
        this.size = 0;
        this.id = 0;
        this.speed = 0;
        this.count = 0;
        this.position = 0;
        this.img = new Image();
        this.srcX = 24;
        this.srcY = 32;
        this.score = 0;
        this.name = '';
    }
    render(){
        this.check_collide();
        this.set_score();
        this.img.src = "sprite/hero_img.png";
        if(this.count > 7){ this.count = 0;}
        ctx.drawImage(
            this.img, this.srcX * this.count, this.srcY * this.position, this.img.width/8, this.img.height/4,
            this.x, this.y, this.img.width/8, this.img.height/4
        );
    }
    set_score(){
        ctx.font = "15px Georgia";
        ctx.fillText(`${this.name}`, this.x - 40, this.y - 20);

        ctx.font = "15px Georgia";
        ctx.fillText(`Score: ${this.score}`, this.x - 40, this.y - 5);
    }
    check_collide(){
        if(map){
            let tile = map.tile;
            for(let i = 0; i < tile.length; i++){
                let distX = (this.x + this.size/2) - (tile[i].x + map.size/2);
                let distY = (this.y + this.size/2) - (tile[i].y + map.size/2);
                let c_size = (this.size + map.size)/2;
                if(Math.abs(distX) < c_size && Math.abs(distY) < c_size){ 
                    let overX = c_size - Math.abs(distX);
                    let overY = c_size - Math.abs(distY);
                    if(overX > overY){this.y = distY > 0 ? this.y + overY : this.y - overY; }
                    if(overY > overX){this.x = distX > 0 ? this.x + overX : this.x - overX;}
                }
            }
        }
    }
}
let player = new Player();