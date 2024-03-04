const db = require('../db/models');

const getComments = async (req, res) => {
  try {
    const { post_id } = req.query;
    const comments = await db.Comments.findAll({
      where: {
        post_id: post_id,
        active: true,
      },
      include: {
        model: db.Users,
        attributes: { exclude: ['password', 'updatedAt', 'createdAt'] },
      },
      order: [['createdAt', 'desc']],
    });
    res.status(200).json(comments);
  } catch (err) {
    console.error(err);
    res.status(500).json({
      message: 'Internal Server Error',
    });
  }
};

const createComments = async (req, res) => {
  try {
    const { post_id, content } = req.body;
    const user_id = req.idUser;
    await db.Comments.create({ post_id, user_id, content });
    const { count } = await db.Comments.findAndCountAll({
      where: {
        post_id: post_id,
      },
    });
    await db.Posts.update(
      { count_comments: count },
      { where: { id_post: post_id } }
    );
    res.status(200).json({
      message: 'Comment successfull Added',
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({
      message: 'Internal Server Error',
    });
  }
};

const deleteComments = async (req, res) => {
  try {
    const { id } = req.params;
    await db.Comments.update({ active: false }, { where: { id_comment: id } });
    res.status(200).json({
      message: 'Deleting Comment Success',
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({
      message: 'Internal Server Error',
    });
  }
};

module.exports = { getComments, createComments, deleteComments };
