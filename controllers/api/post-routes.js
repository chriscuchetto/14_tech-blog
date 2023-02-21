const router = require('express').Router();
const Post = require('../../models/Post');

// route to create/add a post using async/await
router.post('/', async (req, res) => {
  try { 
    const postData = await Post.create({
    title: req.body.title,
    body: req.body.body,
    user_id: req.body.user_id,
  });
  // if the post is successfully created, the new response will be returned as json
  res.status(200).json(postData)
} catch (err) {
  res.status(400).json(err);
}
});


module.exports = router;
