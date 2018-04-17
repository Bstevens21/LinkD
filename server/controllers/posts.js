const Post = require('../models').Post;

module.exports = {
  create(req, res) {
    return Post
      .create({
        postTitle: req.body.title,
        postStartTime: req.body.start,
        postLocation: req.body.location,
        postBody: req.body.body,
        postCategory: req.body.category,
      })
      .then(post => res.status(201).json({redirectUrl:'/signin'}))
      .catch(error => {
        res.status(400).send(error)
        console.log('Here: '+req.body.title)
      });
  },

  getPost(req, res) {
    Post
    .findAll({
      order: [
        ['createdAt', 'DESC']
      ]
    }).then(post => res.status(200).json({"post": post}))
    .catch(error => {
      res.status(400).send(error)
      console.log(error)
    });
  },

  filterCat(req, res){
    const category = req.params.category;
    Post.findAll({
      where: { postCategory : category }
    }).then(post => res.status(200).json({"post": post}))
    .catch(error => {
      res.status(400).send(error)
      console.log(error)
    });
  }
};