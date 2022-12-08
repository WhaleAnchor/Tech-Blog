const { Post } = require('../models');

const postdata =
[
  {
    "id": 1,
    "postTitle": "Hello, everyone!",
    "postContent": "Comment below what your favorite color is :D",
    "date_created": "2022-01-01",
    "userId": 1
  },
  {
    "id": 2,
    "postTitle": "You like?",
    "postContent": "dancing in the rain?",
    "date_created": "2022-02-02",
    "userId": 2
  },
  {
    "id": 3,
    "postTitle": "Any music lovers?",
    "postContent": "I am a trombone main.",
    "date_created": "2022-03-03",
    "userId": 3
  }
];

const seedPost = () => Post.bulkCreate(postdata);

module.exports = seedPost;