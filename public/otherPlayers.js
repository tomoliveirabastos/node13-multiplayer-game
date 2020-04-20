class OtherPlayers{
    constructor(){
        this.all_players =  {};
    }
    render(){
        let e = this.all_players;
        let keys = Object.keys(e);
        let img = new Image();
        img.src = "sprite/img.png";
        for(let i = 0; i< keys.length; i++){
            if(socket.id !== keys[i]){
                if(e[keys[i]].count > 7){ e[keys[i]].count = 0;}
                ctx.font = "15px Georgia";
                ctx.fillText(`${e[keys[i]].name}`, e[keys[i]].x - 40, e[keys[i]].y - 20);
        
                ctx.font = "15px Georgia";
                ctx.fillText(`Score: ${e[keys[i]].score}`, e[keys[i]].x - 40, e[keys[i]].y - 5);
                ctx.drawImage(
                    img,
                    e[keys[i]].srcX * e[keys[i]].count, 
                    e[keys[i]].srcY * e[keys[i]].position, 
                    img.width/8, 
                    img.height/4,
                    e[keys[i]].x, e[keys[i]].y, 
                    img.width/8,
                    img.height/4
                );
            }
        }
    }
}
let otherPlayers = new OtherPlayers();