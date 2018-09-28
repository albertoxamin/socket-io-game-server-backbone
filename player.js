var shortId = require('shortId');

var Player = function() {
    var id;
    id = shortId.generate();

    return{
        id: id
    }
};

exports.Player = Player;