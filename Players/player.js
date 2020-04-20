class Players{
    constructor(){ this.all_players = {}; }
    set_player(obj){ this.all_players[obj.id] = obj; }
    remove_player(id){ delete this.all_players[id]; }
}
let default_players = new Players();
module.exports = default_players;