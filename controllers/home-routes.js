const router = require('express').Router();
const { User } = require('../models');
const Post = require('../models/Post');

// route to get all Posts
router.get('/', async (req, res) => {
  const postData = await Post.findAll({include: [User]}).catch((err) => { 
    res.json(err);
  });
    const posts = postData.map((post) => post.get({ plain: true }));
    console.log(posts);
    res.render('all', { posts, loggedIn: req.session.loggedIn });
  });

  router.get('/login', (req, res) => {
    if (req.session.loggedIn) {
      res.redirect('/');
      return;
    }
  
    res.render('login');
  });

  router.get('/dashboard', (req, res) => {
    if (req.session.loggedIn) {
      res.render('dashboard');
      return;
    }
  
    res.redirect('/');
  });
  

module.exports = router;
