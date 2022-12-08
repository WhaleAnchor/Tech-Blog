const router = require('express').Router();
const { Post } = require('../../models/');
const auth = require('../../utils/auth');

// POST: request to add post
router.post("/", auth, async (req, res) => {
  const content = req.body;
  try {
    const newPost = await Post.create({ ...content, userId: req.session.userId });
    res.status(200).json({newPost, message: 'Created Message!'});
  } catch (err) {
    res.status(500).json(err);
  };
});

// PUT: request to edit a post
router.put("/:id", auth, async (req, res) => {
  try {

    const editPost = await Post.update(req.body, {
      where: {
        id: req.params.id,
      },
    });
    res.status(200).json(editPost);
  } catch (err) {
    res.status(500).json(err);
  };
});

// DELETE: request for deleting a post
router.delete("/:id", auth, async (req, res) => {
  try {
    const deletePost = Post.destroy({
      where: { id: req.params.id },
    });
    res.status(200).json(deletePost);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
