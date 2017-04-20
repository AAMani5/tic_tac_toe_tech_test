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

});
