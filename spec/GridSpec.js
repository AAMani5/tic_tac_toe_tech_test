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

});
