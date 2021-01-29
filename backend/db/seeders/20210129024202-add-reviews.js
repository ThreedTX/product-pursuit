'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {

    return queryInterface.bulkInsert('Reviews', [
      { productId: 1, userId: 2, comment: "As someone trying to pay the bills while pursuing a music career, this app is perfect. #WeCanEat #GrindDontStop", rating: 5, createdAt: new Date(), updatedAt: new Date() },
      { productId: 2, userId: 1, comment: "It's aight.", rating: 3, createdAt: new Date(), updatedAt: new Date() },
      { productId: 3, userId: 1, comment: "Boo! My product is way better...next!", rating: 1, createdAt: new Date(), updatedAt: new Date() },
      { productId: 4, userId: 2, comment: "Impressive tech!", rating: 5, createdAt: new Date(), updatedAt: new Date() },
      { productId: 4, userId: 3, comment: "Why people always gotta be taking selfies and editing them -- just take the picture.", rating: 2, createdAt: new Date(), updatedAt: new Date() },
      { productId: 5, userId: 1, comment: "Nice. Simple. Easy to use. 5/5", rating: 5, createdAt: new Date(), updatedAt: new Date() },
      { productId: 2, userId: 3, comment: "Very helpful. Would recommend.", rating: 5, createdAt: new Date(), updatedAt: new Date() },
      { productId: 2, userId: 1, comment: "As a photographer, I'm always on the move. This app is exactly what Im looking for. Although, it does bug out from time to time.", rating: 4, createdAt: new Date(), updatedAt: new Date() },
    ], {});
  },

  down: (queryInterface, Sequelize) => {

    return queryInterface.bulkDelete('Reviews', null, {});
  }
};
