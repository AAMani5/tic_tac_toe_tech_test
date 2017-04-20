describe("Feature Tests", function() {
  var player1 = new Player('X');
  var player2 = new Player('O');
  var grid = new Grid({rows:3, columns:3});
  var game = new Game(player1, player2, grid);

  it("Game knoes when a game is over, with no winner", function(){
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
  });

});
