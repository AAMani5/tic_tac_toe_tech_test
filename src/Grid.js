(function(exports) {

  function Grid(dimensions) {
    this.rows = dimensions.rows;
    this.columns = dimensions.columns;
    this.table = this._createTable(dimensions);
  }

  Grid.prototype.isFieldClaimed = function (fieldLocation) {
    if (fieldLocation.row >= this.rows || fieldLocation.col >= this.columns) {
      throw new Error('Field must be within the grid, Please check row and column number');
    }
    return this.table[fieldLocation.row][fieldLocation.col] === " ";
  };

  Grid.prototype.areAllFieldsCalimed = function () {
    var allCalimed = this.table.every(function(row){
      return row.every(function(element){
        return element !== " ";
      });
    });
    return allCalimed;
  };

  Grid.prototype._createTable = function (dimensions) {
    if(dimensions === undefined){
      throw new Error('Grid Dimension must be specified while creation');
    }
    var table = [];
    for(var r = 0; r < dimensions.rows; r++){
      var row = [];
      for(var c = 0; c < dimensions.columns; c++){
        row.push(" ");
      }
      table.push(row);
    }

    return table;
  };

exports.Grid = Grid;

})(this);