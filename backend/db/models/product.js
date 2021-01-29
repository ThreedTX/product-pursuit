'use strict';
module.exports = (sequelize, DataTypes) => {
  const Product = sequelize.define('Product', {
    userId: DataTypes.INTEGER,
    name: DataTypes.STRING,
    description: DataTypes.TEXT,
    rating: DataTypes.INTEGER,
    imgUrl: DataTypes.STRING
  }, {});
  Product.associate = function (models) {
    Product.hasMany(models.Review, { foreignKey: 'productId' });
    Product.belongsTo(models.User, { foreignKey: 'userId' });
  };
  return Product;
};
