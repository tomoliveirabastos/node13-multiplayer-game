let class_players = require('./Players/player');
let class_food = require('./Players/food');
let class_map = require('./Map/map');

const express = require('express');
const path = require('path');
const app = express();
const server = require('http').createServer(app);
const io = require('socket.io')(server);

app.use(express.static(path.join(__dirname, 'public')));
app.set('views', path.join(__dirname, 'public'));
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');
app.use('/', (req, res) =>{ res.render('index.html'); });

let food_change_position = ()=>{
    class_food.x = no_tile[ Math.floor(Math.random() * no_tile.length) ].x;
    class_food.y = no_tile[ Math.floor(Math.random() * no_tile.length) ].y;
    return class_food;
}

let check_collide = (p)=>{
    let distX = (p.x + p.size/2) - (class_food.x + class_food.size/2);
    let distY = (p.y + p.size/2) - (class_food.y + class_food.size/2);
    let c_size = (p.size + class_food.size)/2;
    if(Math.abs(distX) < c_size && Math.abs(distY) < c_size){ 
        p.score += 1;
        return true; 
    }
    return false;
}

let no_tile = class_map.get_no_tile();
let tile = class_map.get_tile();
let food = food_change_position();

io.on('connection', socket =>{
    let p = {
        id: socket.id,
        x: no_tile[0].x, 
        y: no_tile[0].y,
        speed: 2.5,
        score: 0,
        name: '',
        size: 20
    };

    class_players.set_player(p);
    socket.emit('player', p);
    socket.emit('food', food);
    socket.emit('map', { no_tile : no_tile, tile: tile, size: class_map.size});
    socket.on('disconnect', () =>{ class_players.remove_player(socket.id) });
    socket.on('message', (e)=>{
        class_players.set_player(e);
        socket.broadcast.emit('other_players', class_players.all_players);
        if(check_collide(e) === true){ 
            food = food_change_position();
            socket.emit('my_score', e.score);
            socket.emit('beep');
            socket.emit('food', food);
            socket.broadcast.emit('food', food);
        }
    });
});
server.listen(4000);
