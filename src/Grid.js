(function(exports) {

  function Grid(dimensions) {
    this.rows = dimensions.rows;
    this.columns = dimensions.columns;
    this.table = this._createTable(dimensions);
  }

  Grid.prototype.claimField = function (player, fieldLocation) {
    this._checkFieldLocation(fieldLocation);
    this.table[fieldLocation.row][fieldLocation.col] = player.name;
  };

  Grid.prototype.hasPlayerClaimedColumn = function (player) {
    columnsClaimed =  (this.table[0][0] === player.name && this.table[1][0] === player.name && this.table[2][0] === player.name) ||
    (this.table[0][1] === player.name && this.table[1][1] === player.name && this.table[2][1] === player.name) ||
    (this.table[0][2] === player.name && this.table[1][2] === player.name && this.table[2][2] === player.name);
    return columnsClaimed;
  };

  Grid.prototype.hasPlayerClaimedRow = function (player) {
     var rowsCalimed = this.table.map(function(row){
       return row.every(function(field){
         return field === player.name;
       });
    });
    return rowsCalimed.includes(true);
  };


  Grid.prototype.isFieldClaimed = function (fieldLocation) {
    this._checkFieldLocation(fieldLocation);
    return this.table[fieldLocation.row][fieldLocation.col] !== " ";
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

  Grid.prototype._checkFieldLocation = function (fieldLocation) {
    if (fieldLocation.row >= this.rows || fieldLocation.col >= this.columns) {
      throw new Error('Field must be within the grid, Please check row and column number');
    }
  };

exports.Grid = Grid;

})(this);
