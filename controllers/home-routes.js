const router = require('express').Router();
const Post = require('../models/Post');

// route to get all Posts
router.get('/', async (req, res) => {
  const postData = await Post.findAll().catch((err) => { 
    res.json(err);
  });
    const posts = postData.map((post) => post.get({ plain: true }));
    res.render('all', { posts, loggedIn: req.session.loggedIn });
  });

  router.get('/login', (req, res) => {
    if (req.session.loggedIn) {
      res.redirect('/');
      return;
    }
  
    res.render('login');
  });
  

module.exports = router;
