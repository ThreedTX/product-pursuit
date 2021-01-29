'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {

    return queryInterface.bulkInsert('Products', [
      { userId: 1, name: 'Soundsgood', description: 'Sell audio directly to listeners with secure mobile delivery', imgUrl: '', createdAt: new Date(), updatedAt: new Date() },
      { userId: 3, name: 'Lens-ane', description: 'Convert images on the fly', imgUrl: '', createdAt: new Date(), updatedAt: new Date() },
      { userId: 2, name: 'Litebulb', description: 'An idea center, for your next project', imgUrl: '', createdAt: new Date(), updatedAt: new Date() },
      { userId: 1, name: 'Selfmade', description: 'Do it yourself selfie customization tool', imgUrl: '', createdAt: new Date(), updatedAt: new Date() },
      { userId: 2, name: 'Paste Perfect', description: 'Universal pasteboard', imgUrl: '', createdAt: new Date(), updatedAt: new Date() },
    ], {});
  },

  down: (queryInterface, Sequelize) => {

    return queryInterface.bulkDelete('Products', null, {});
  }
};
