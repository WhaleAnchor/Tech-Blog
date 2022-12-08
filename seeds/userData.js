const { User } = require('../models');

const userdata =
[
  {
    "username": "ParryHotter",
    "password": "testpassword111"
  },
  {
    "username": "scrumlord",
    "password": "testpassword222"
  },
  {
    "username": "Gitgud",
    "password": "testpassword333"
  }
];

const seedUser = () => User.bulkCreate(userdata, {
  individualHooks: true,
  returning: true,
});

module.exports = seedUser;

