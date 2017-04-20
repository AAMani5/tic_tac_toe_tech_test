describe("Game", function(){

  beforeEach(function(){
    player1 = {name: 'X'};
    player2 = {name: 'O'};
    game = new Game(player1, player2);
  });

  it("#new", function(){
    expect(game instanceof Game).toBe(true);
  });

  it("#players", function(){
    expect(game.playerList()).toEqual([player1, player2]);
  });

});
