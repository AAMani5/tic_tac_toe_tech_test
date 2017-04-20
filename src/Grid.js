(function(exports) {

  function Grid(dimensions) {
    this.table = this._createTable(dimensions);
  }

  Grid.prototype.areAllFieldsCalimed = function () {

    var allCalimed = this.table.every(function(row){
      return row.every(function(element){
        return element !== " ";
      });
    });
    return allCalimed;
  };

  Grid.prototype._createTable = function (dimensions) {
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
