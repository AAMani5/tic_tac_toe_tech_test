describe("Grid", function() {

  beforeEach(function(){
    grid = new Grid({rows:3, columns:3});
  });

  it("#new", function() {
    expect(grid instanceof Grid).toBe(true);
  });

  it("#areAllFieldsCalimed", function(){
    expect(grid.areAllFieldsCalimed()).toBe(false);
  });

  it("#isFieldCalimed", function() {
    expect(grid.isFieldClaimed({row:1, col:2})).toBe(false);
  });

  it("#calimField", function() {
    grid.claimField({name: 'X'}, {row:1, col:2});
    expect(grid.isFieldClaimed({row:1, col:2})).toBe(true);
  });

  describe("#hasPlayerClaimedRow", function() {

    it("returns false if player has not claimed the whole row", function() {
      expect(grid.hasPlayerClaimedRow({name: 'X'}, 0)).toBe(false);
    });

    it("returns true if player claimed the whole row", function() {
      grid.claimField({name: 'X'}, {row:0, col:0});
      grid.claimField({name: 'X'}, {row:0, col:1});
      grid.claimField({name: 'X'}, {row:0, col:2});
      expect(grid.hasPlayerClaimedRow({name: 'X'}, 0)).toBe(true);
    });

  });


});
