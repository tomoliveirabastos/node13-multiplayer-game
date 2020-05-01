class Enemy{
    constructor(){
        this.x = 40;
        this.y = 40;
        this.size = 20;
        this.direction = 'DOWN';
        this.speed = 0.5;
        this.count = 0;
        this.validPUSH = ['DOWN'];
    }

    move(map, size){

        let tile = map.get_tile();
        for(let i = 0; i < tile.length; i++){
            let distX = (this.x + this.size/2) - (tile[i].x + map.size/2);
            let distY = (this.y + this.size/2) - (tile[i].y + map.size/2);
            let c_size = (this.size + map.size)/2;
            if(Math.abs(distX) < c_size && Math.abs(distY) < c_size){ 
                let overX = c_size - Math.abs(distX);
                let overY = c_size - Math.abs(distY);
                let val = ['RIGHT', 'DOWN', 'UP', 'LEFT'];
                this.validPUSH.push(val[Math.floor(Math.random() * val. length)]);
                this.direction = this.validPUSH[Math.floor(Math.random() * this.validPUSH.length)];
                if(overX > overY){
                    this.y = distY > 0 ? 
                    this.y + overY: 
                    this.y - overY; 
                }
                
                if(overY > overX){
                    this.x = distX > 0 ? 
                    this.x + overX : 
                    this.x - overX;
                }
            }
        }
        this.key_move()[this.direction]();
    }
    key_move(){
        let k = {
            'LEFT':()=>{ this.x -= this.speed; },
            'RIGHT':()=>{ this.x += this.speed; },
            'UP':()=>{ this.y -= this.speed;},
            'DOWN':()=>{this.y += this.speed;}
        }
        return k;
    }
}
let enemy = new Enemy();
module.exports = enemy;