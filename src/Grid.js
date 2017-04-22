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
    var transpoedArray = this._transposeArray(this.table);
    var columnsClaimed = this._checkEachRow(transpoedArray, player)
    return columnsClaimed.includes(true);
  };

  Grid.prototype.hasPlayerClaimedRow = function (player) {
    var rowsClaimed = this._checkEachRow(this.table, player);
    return rowsClaimed.includes(true);
  };

  Grid.prototype.hasPlayerClaimedDiagonal = function (player) {
    var diaClaimed = (this.table[0][0] === player.name && this.table[1][1] === player.name && this.table[2][2] === player.name) ||
    (this.table[2][0] === player.name && this.table[1][1] === player.name && this.table[0][2] === player.name);

    return diaClaimed;
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

  Grid.prototype._transposeArray = function (array) {
    return Object.keys(array[0]).map(
        function (column) { return array.map(function (row) { return row[column]; }); }
        );
  };

  Grid.prototype._checkEachRow = function (array, player) {
    return array.map(function(row){
      return row.every(function(field){return field === player.name;});
    });
  };

exports.Grid = Grid;

})(this);
