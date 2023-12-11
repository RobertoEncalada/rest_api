const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('products', {
    ProductID: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    ProductName: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    SupplierID: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'suppliers',
        key: 'SupplierID'
      }
    },
    CategoryID: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'categories',
        key: 'CategoryID'
      }
    },
    Unit: {
      type: DataTypes.STRING(25),
      allowNull: true
    },
    Price: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'products',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "ProductID" },
        ]
      },
      {
        name: "CategoryID",
        using: "BTREE",
        fields: [
          { name: "CategoryID" },
        ]
      },
      {
        name: "SupplierID",
        using: "BTREE",
        fields: [
          { name: "SupplierID" },
        ]
      },
    ]
  });
};
