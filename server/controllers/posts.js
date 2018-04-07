const Post = require('../models').Post;

module.exports = {
  create(req, res) {
    return Post
      .create({
        postTitle: req.body.title,
        postStartTime: req.body.start,
        postDuration: req.body.duration,
        postLocation: req.body.location,
        postRequirements: req.body.requirments,
        postBody: req.body.body,
        // postCategory: 'game',
      })
      .then(post => res.status(201).send(post))
      .catch(error => res.status(400).send(error));
  },
};