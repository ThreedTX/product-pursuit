'use strict';
module.exports = (sequelize, DataTypes) => {
  const Review = sequelize.define('Review', {
    productId: DataTypes.INTEGER,
    userId: DataTypes.INTEGER,
    comment: DataTypes.TEXT,
    rating: DataTypes.INTEGER
  }, {});
  Review.associate = function (models) {
    Review.belongsTo(models.User, { foreignKey: 'userId' });
    Review.belongsTo(models.Product, { foreignKey: 'productId' });
  };
  return Review;
};
