const sequelize = require('../config/config');
const user = require('./userData');
const post = require('./postData');

const seedAll = async () => {
  try {
    await sequelize.sync({ force: true });

  await user();
  await post();

  process.exit(0);
  } catch (error) {
    console.log(error)
  };
  
};

seedAll();