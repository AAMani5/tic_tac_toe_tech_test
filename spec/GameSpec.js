describe("Game", function(){
  var player1, player2, game, grid;

  beforeEach(function(){
    player1 = {name: 'X'};
    player2 = {name: 'O'};
    grid = new Grid({rows: 3, columns: 3});
    game = new Game(player1, player2, grid);
  });

  it("#new", function(){
    expect(game instanceof Game).toBe(true);
  });

  it("#players", function(){
    expect(game.playerList()).toEqual([player1, player2]);
  });

  it("#platform", function(){
    expect(game.platform()).toEqual(grid);
  });

  it("#isWon", function(){
    expect(game.isWon()).toBe(false);
  });

  it("#isOver", function(){
    expect(game.isOver()).toBe(false);
  });

  it("#play", function(){
    expect(function(){game.play(player1, {row:1, col:2});}).not.toThrow();
  });

  it("switches players after a player has claimed a field", function(){
    game.play(player1, {row:1, col:2});
    expect(function(){game.play(player1, {row:1, col:2})}).toThrow();
  });


});
