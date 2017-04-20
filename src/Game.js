(function(exports){

  function Game(player1, player2) {
    this.players = [player1, player2];
  }

  Game.prototype.playerList = function () {
    return this.players;
  };

  exports.Game = Game;

})(this);
