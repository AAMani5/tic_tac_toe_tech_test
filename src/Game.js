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
      console.log(this.grid.hasPlayerClaimedDiagonal(this.currentPlayer));
    return won;
  };

  Game.prototype.isOver = function () {
    var over = this.grid.areAllFieldsCalimed();
    return over;
  };

  Game.prototype.play = function (player, fieldLocation) {
    if(this._checksToProceed(player, fieldLocation)){
      this.grid.claimField(player, fieldLocation);
      this._switchPlayers();
    }else {
      throw new Error('Invalid Move: game over or not players turn or field claimed');
    }
  };

  Game.prototype._switchPlayers = function () {
    this.currentPlayer = this.currentPlayer === this.players[0] ? this.players[1] : this.players[0];
    console.log(this.currentPlayer);
    console.log(this.players);
  };

  Game.prototype._checksToProceed = function (player, fieldLocation) {
    var proceed = (this.currentPlayer === player) && (!this.isWon()) && (!this.isOver()) && (!this.grid.isFieldClaimed(fieldLocation));
    console.log(!this.isWon());
    return proceed;
  };

  exports.Game = Game;

})(this);
