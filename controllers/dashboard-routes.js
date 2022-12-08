const router = require('express').Router();
const { Post, User } = require('../models/');
const auth = require('../utils/auth');

// GET: Renders all posts by user and date of posting
router.get('/', auth, async (req, res) => {
  try {
    // Finds all posts made by the user.
    const userPosts = await Post.findAll({
      where:{"userId": req.session.userId},
      include: [User]
    });

    const posts = userPosts.map((post) => 
      post.get({ plain: true })
    );
    
    // renders all-posts handlebars
    res.render('all-posts', {layout: 'dashboard', posts});
  } catch (err) {
    // if err throws with auth, then redirect to login
    res.redirect('login');
  }
});

// GET: Renders the '/new' endpoint for making new posts
router.get('/new', auth, (req, res) => {
  res.render('new-post', { layout: 'dashboard' });
});

// GET: Renders 'edit-post' handlebars for editing past posts.
router.get('/edit/:id', auth, async (req, res) => {
  try {
    // Searches database by its id.
    const singlePost = await Post.findByPk(req.params.id);

    if (singlePost) {
      const post = singlePost.get({ plain: true });
      res.render('edit-post', { layout: 'dashboard', post });
    } else {
      res.status(404).end();
    }
  } catch (err) {
    // if err throws with auth, then redirect to login
    res.redirect('login');
  }
});

module.exports = router;
