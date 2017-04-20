describe("Player", function(){
  var player;

  beforeEach(function(){
    player = new Player('X');
  });

  it("#new", function(){
    expect(player instanceof Player).toBe(true);
  });

  it("#name", function(){
    expect(player.name).toBe('X');
  });

});
