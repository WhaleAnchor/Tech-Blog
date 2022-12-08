const router = require('express').Router();
const { Comment } = require('../../models/');
const auth = require('../../utils/auth');

//GET: Renders the single-post handlebars
router.get("/", auth, async (req, res) => {
 try { 
  // finds all records of comments on a post
  const commentData = await Comment.findAll({
    include: [User],
  });
  const comments = commentData.map((comment) => 
    comment.get({ plain: true })
  );

  res.render('single-post', {comments, loggedIn: req.session.loggedIn});

  } catch (err) {
    res.status(500).json(err);
  }
});

// POST: Adds a comment to a single post
router.post("/", auth, async (req, res) => {
  const comment = req.body;
  try {
    const newComment = await Comment.create({
      // takes the content of the body
      ...comment,
      userId: req.session.userId,
    });

    res.json(newComment);

  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
