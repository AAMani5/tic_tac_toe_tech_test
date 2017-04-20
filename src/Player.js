(function(exports){

'use strict';

  function Player(name){
    this.name = name;
  }

  Player.prototype.name = function () {
    return this.name;
  };

  exports.Player = Player;

})(this);
