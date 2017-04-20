(function(exports){

  function Game(player1, player2, grid) {
    this.currentPlayer = player1;
    this.opponentPlayer = player2;
    this.players = [player1, player2];
    this.grid = grid;
  }

  Game.prototype.playerList = function () {
    return this.players;
  };

  Game.prototype.platform = function () {
    return this.grid;
  };

  Game.prototype.isWon = function () {
    var won = this.grid.hasPlayerClaimedRow(this.currentPlayer) || this.grid.hasPlayerClaimedColumn(this.currentPlayer) || this.grid.hasPlayerClaimedDiagonal(this.currentPlayer) ||
      this.grid.hasPlayerClaimedRow(this.opponentPlayer) || this.grid.hasPlayerClaimedColumn(this.opponentPlayer) || this.grid.hasPlayerClaimedDiagonal(this.opponentPlayer);
    return won;
  };

  Game.prototype.isOver = function () {
    var over = this.grid.areAllFieldsCalimed()
    return over;
  };

  exports.Game = Game;

})(this);
