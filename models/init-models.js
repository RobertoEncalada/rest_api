var DataTypes = require("sequelize").DataTypes;
var _categories = require("./categories");
var _customers = require("./customers");
var _employees = require("./employees");
var _orderdetails = require("./orderdetails");
var _orders = require("./orders");
var _products = require("./products");
var _shippers = require("./shippers");
var _suppliers = require("./suppliers");

function initModels(sequelize) {
  var categories = _categories(sequelize, DataTypes);
  var customers = _customers(sequelize, DataTypes);
  var employees = _employees(sequelize, DataTypes);
  var orderdetails = _orderdetails(sequelize, DataTypes);
  var orders = _orders(sequelize, DataTypes);
  var products = _products(sequelize, DataTypes);
  var shippers = _shippers(sequelize, DataTypes);
  var suppliers = _suppliers(sequelize, DataTypes);

  products.belongsTo(categories, { as: "Category", foreignKey: "CategoryID"});
  categories.hasMany(products, { as: "products", foreignKey: "CategoryID"});
  orders.belongsTo(customers, { as: "Customer", foreignKey: "CustomerID"});
  customers.hasMany(orders, { as: "orders", foreignKey: "CustomerID"});
  orders.belongsTo(employees, { as: "Employee", foreignKey: "EmployeeID"});
  employees.hasMany(orders, { as: "orders", foreignKey: "EmployeeID"});
  orderdetails.belongsTo(orders, { as: "Order", foreignKey: "OrderID"});
  orders.hasMany(orderdetails, { as: "orderdetails", foreignKey: "OrderID"});
  orderdetails.belongsTo(products, { as: "Product", foreignKey: "ProductID"});
  products.hasMany(orderdetails, { as: "orderdetails", foreignKey: "ProductID"});
  orders.belongsTo(shippers, { as: "Shipper", foreignKey: "ShipperID"});
  shippers.hasMany(orders, { as: "orders", foreignKey: "ShipperID"});
  products.belongsTo(suppliers, { as: "Supplier", foreignKey: "SupplierID"});
  suppliers.hasMany(products, { as: "products", foreignKey: "SupplierID"});

  return {
    categories,
    customers,
    employees,
    orderdetails,
    orders,
    products,
    shippers,
    suppliers,
  };
}
module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;
