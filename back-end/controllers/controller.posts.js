const db = require('../db/models');

const createPost = async (req, res) => {
  try {
    const { user_id, content } = req.body;
    const newPost = await db.Posts.create({
      user_id: user_id,
      content: content,
    });
    res.status(200).json({
      message: `Creating new Post With ID : ${newPost.id_post}, was Successfull`,
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({
      message: 'Internal Server Error',
    });
  }
};

const getPosts = async (req, res) => {
  try {
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 10;
    const startIndex = (page - 1) * limit;
    const endIndex = page * limit;
    const posts = await db.Posts.findAll({
      where: {
        active: true,
      },
      include: {
        model: db.Users,
        attributes: { exclude: ['password', 'createdAt', 'updatedAt'] },
      },
    });
    const result = {
      posts: posts.slice(startIndex, endIndex),
      page: page,
      limit: limit,
      totalPages: Math.ceil(posts.length / limit),
      totalPosts: posts.length,
    };
    res.status(200).json(result);
  } catch (err) {
    console.error(err);
    res.status(500).json({
      message: 'Internal Server Error',
    });
  }
};

const getPostById = async (req, res) => {
  try {
    const { id } = req.params;
    const post = await db.Posts.findOne({
      where: { id_post: id },
      include: {
        model: db.Users,
        attributes: { exclude: ['password', 'createdAt', 'updatedAt'] },
      },
    });
    if (!post) {
      return res.status(404).json({
        message: 'Posts is Not Found',
      });
    }
    res.status(200).json(post);
  } catch (err) {
    console.error(err);
    res.status(500).json({
      message: 'Internal Server Error',
    });
  }
};

const deletePost = async (req, res) => {
  try {
    const { id } = req.params;
    const post = await db.Posts.findOne({ where: { id_post: id } });
    if (!post) {
      return res.status(404).json({ message: 'Posts is Not Found' });
    }
    await db.Posts.update({ active: false }, { where: { id_post: id } });
    res.status(200).json({
      message: 'Deleting Posts Successfully',
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({
      message: 'Internal Server Error',
    });
  }
};

const updatePost = async (req, res) => {
  try {
    const { id_post, content } = req.body;
    const post = await db.Posts.findOne({ where: { id_post: id_post } });
    if (!post) {
      return res.status(404).json({ message: 'Post not found.' });
    }
    await db.Posts.update({ content }, { where: { id_post } });
    return res.status(200).json({
      message: 'Updating Post Success',
    });
  } catch (err) {
    console.log(err);
    return res.status(500).json({
      message: 'Internal Server Error',
    });
  }
};

module.exports = { createPost, getPosts, getPostById, deletePost, updatePost };
