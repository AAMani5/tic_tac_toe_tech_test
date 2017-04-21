describe("Feature Tests", function() {
  var player1, player2, grid, game;

  beforeEach(function(){
    player1 = new Player('X');
    player2 = new Player('O');
    grid = new Grid({rows:3, columns:3});
    game = new Game(player1, player2, grid);
  });

  it("Game knows when a game is over, with no winner", function(){
    game.play(player1,{row:0, col:0});
    game.play(player2,{row:0, col:1});
    game.play(player1,{row:0, col:2});
    game.play(player2,{row:1, col:0});
    game.play(player1,{row:1, col:1});
    game.play(player2,{row:2, col:0});
    game.play(player1,{row:1, col:2});
    game.play(player2,{row:2, col:2});
    game.play(player1,{row:2, col:1});
    expect(game.isOver()).toBe(true);
    expect(game.isWon()).toBe(false);
    expect(function(){game.play(player2, {row:1, col:2});}).toThrow();
  });

  it("Game knows when a game has a winner - row claimed", function(){
    game.play(player1,{row:0, col:0});
    game.play(player2,{row:1, col:0});
    game.play(player1,{row:0, col:1});
    game.play(player2,{row:2, col:0});
    game.play(player1,{row:0, col:2});
    expect(function(){game.play(player2, {row:1, col:2});}).toThrow();
    expect(game.isOver()).toBe(false);
    expect(game.isWon()).toBe(true);
  });

  it("Game knows when a game has a winner - column claimed", function(){
    game.play(player1,{row:0, col:0});
    game.play(player2,{row:0, col:1});
    game.play(player1,{row:1, col:0});
    game.play(player2,{row:0, col:2});
    game.play(player1,{row:2, col:0});
    expect(function(){game.play(player2, {row:1, col:2});}).toThrow();
    expect(game.isOver()).toBe(false);
    expect(game.isWon()).toBe(true);
  });

  it("Game knows when a game has a winner - diagonal claimed", function(){
    game.play(player1,{row:0, col:0});
    game.play(player2,{row:0, col:1});
    game.play(player1,{row:1, col:1});
    game.play(player2,{row:0, col:2});
    game.play(player1,{row:2, col:2});
    expect(function(){game.play(player2, {row:1, col:2});}).toThrow();
    expect(game.isOver()).toBe(false);
    expect(game.isWon()).toBe(true);
  });


});
