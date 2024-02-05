const db = require('../db/models');

const likeController = {
  getLikes: async (req, res) => {
    try {
      const { post_id } = req.params;
      const post = await db.Posts.findByPk(post_id);
      if (!post) {
        return res.status(404).json({ error: 'Post not found' });
      }
      const likes = await db.Likes.findAll({
        where: { post_id: post_id, active: true },
        include: [{ model: db.Users, attributes: ['id_user', 'username'] }],
      });
      return res.status(200).json(likes);
    } catch (error) {
      console.error(error);
      return res.status(500).json({ error: 'Internal Server Error' });
    }
  },

  addLike: async (req, res) => {
    try {
      const { user_id, post_id } = req.body;
      const user = await db.Users.findByPk(user_id);
      const post = await db.Posts.findByPk(post_id);
      if (!user || !post) {
        return res.status(404).json({ error: 'User or post not found' });
      }
      const newLike = await db.Likes.create({
        active: true,
        user_id: user_id,
        post_id: post_id,
      });
      return res.status(201).json(newLike);
    } catch (error) {
      console.error(error);
      return res.status(500).json({ error: 'Internal Server Error' });
    }
  },

  removeLike: async (req, res) => {
    try {
      const { likeId } = req.params;
      const like = await db.Likes.findByPk(likeId);
      if (!like) {
        return res.status(404).json({ error: 'Like not found' });
      }
      await like.update({ active: false }, { where: { id_like: likeId } });
      return res.status(200).json({ message: 'Like removed successfully' });
    } catch (error) {
      console.error(error);
      return res.status(500).json({ error: 'Internal Server Error' });
    }
  },
};

module.exports = likeController;
