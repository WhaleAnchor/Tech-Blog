const router = require('express').Router();
const { Post, Comment, User } = require('../models/');
const auth = require('../utils/auth');

// GET: render all posts on homepage
router.get("/", async (req, res) => {
  try {

    // finds all records for posts in database
    const allPosts = await Post.findAll({
      include: [User],
    });
    
    const posts = allPosts.map((post) => 
      post.get({ plain: true })
    );

    res.render('all-posts-admin', { posts, loggedIn: req.session.loggedIn});
  } catch (err) {
    res.status(500).json(err);
  }
});

// GET: gets one single post by its id.
router.get("/post/:id", auth, async (req, res) => {
  try {

    const postSingle = await Post.findOne({
      where: {id: req.params.id},
      include: [
        User,
        {
          model: Comment,
          include: [User],
        },
      ],
    });

    if (postSingle) {

      const post = postSingle.get({ plain: true });
      console.log(post);
      res.render('single-post', { post, loggedIn: req.session.loggedIn});
      console.log(post);
    } else {
      res.status(404).end();
    }
  } catch (err) {
    res.status(500).json(err);
  };
});

// GET: If logged in, redirect to dashboard. If not, render login.
router.get('/login', (req, res) => {
  if (req.session.loggedIn) {
    res.redirect('/dashboard');
    return;
  };
  res.render('login');
});

// GET: If logged in, redirect to dashboard. If not, render signup.
router.get('/signup', (req, res) => {
  if (req.session.loggedIn) {
    res.redirect('/dashboard');
    return;
  };

  res.render('signup');
});

module.exports = router;
