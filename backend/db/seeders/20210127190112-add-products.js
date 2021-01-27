'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {

    return queryInterface.bulkInsert('Products', [
      { name: 'Soundsgood', description: 'Sell audio directly to listeners with secure mobile delivery', userId: 1, imgUrl: '', createdAt: new Date(), updatedAt: new Date() },
      { name: 'Lens-ane', description: 'Convert images on the fly', userId: 3, imgUrl: '', createdAt: new Date(), updatedAt: new Date() },
      { name: 'Litebulb', description: 'An idea center, for your next project', userId: 2, imgUrl: '', createdAt: new Date(), updatedAt: new Date() },
      { name: 'Selfmade', description: 'Do it yourself selfie customization tool', userId: 1, imgUrl: '', createdAt: new Date(), updatedAt: new Date() },
      { name: 'Paste Perfect', description: 'Universal pasteboard', userId: 2, imgUrl: '', createdAt: new Date(), updatedAt: new Date() },
    ], {});
  },

  down: (queryInterface, Sequelize) => {

    return queryInterface.bulkDelete('Products', null, {});
  }
};
