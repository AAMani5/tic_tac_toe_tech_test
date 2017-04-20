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
      expect(grid.hasPlayerClaimedRow({name: 'X'})).toBe(false);
    });

    it("returns true if player claimed the whole row", function() {
      grid.claimField({name: 'X'}, {row:0, col:0});
      grid.claimField({name: 'X'}, {row:0, col:1});
      grid.claimField({name: 'X'}, {row:0, col:2});
      expect(grid.hasPlayerClaimedRow({name: 'X'})).toBe(true);
    });

  });

  describe("#hasPlayerClaimedColumn", function() {

    it("returns false if player has not claimed the whole column", function() {
      expect(grid.hasPlayerClaimedColumn({name: 'X'})).toBe(false);
    });

    it("returns true if player claimed the whole column", function() {
      grid.claimField({name: 'X'}, {row:0, col:0});
      grid.claimField({name: 'X'}, {row:1, col:0});
      grid.claimField({name: 'X'}, {row:2, col:0});
      expect(grid.hasPlayerClaimedColumn({name: 'X'})).toBe(true);
    });

  });

  describe("#hasPlayerClaimedDiagonal", function() {

    it("returns false if player has not claimed the whole diagonal", function() {
      expect(grid.hasPlayerClaimedDiagonal({name: 'X'})).toBe(false);
    });

    it("returns true if player claimed the whole diagonal", function() {
      grid.claimField({name: 'X'}, {row:0, col:0});
      grid.claimField({name: 'X'}, {row:1, col:1});
      grid.claimField({name: 'X'}, {row:2, col:2});
      expect(grid.hasPlayerClaimedDiagonal({name: 'X'})).toBe(true);
    });

  });


});
