class Map{
    constructor(){
        this.no_tile = [];
        this.tile = [];
        this.size = 0;
    }
    render(){
        let t = this.tile;
        let n = this.no_tile;
        let img = new Image();
        img.src = "sprite/floor.jpg";

        let img_stone = new Image();
        img_stone.src = "sprite/stone.jpg";

        for(let i = 0; i < this.tile.length; i++){
            ctx.drawImage(img, t[i].x, t[i].y, this.size, this.size);
        }
        for(let i = 0; i < this.no_tile.length; i++){
            ctx.drawImage(img_stone, n[i].x, n[i].y, this.size, this.size);
        }
    }
}
let map = new Map();