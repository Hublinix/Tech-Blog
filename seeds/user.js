const { User } = require('../models');

const userData =
[
  {
    "username": "Kachi Nwosu",
    "email": "kachinwosu1999@gmail.com",
    "password": "Alphabeta123"
  },
]

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;