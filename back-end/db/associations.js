const User = require("./models/users");
const Post = require("./models/post");
const Comment = require("./models/comment");
const Like = require("./models/like");
const Report = require("./models/report");
const Report_type = require("./models/report_type");

// Users Associations
User.hasMany(Post, { foreignKey: "user_id" }); // A user can have many posts
User.hasMany(Comment, { foreignKey: "user_id" });
User.hasMany(Like, { foreignKey: "user_id" });

// Post Associations
Post.belongsTo(User, { foreignKey: "user_id" });
Post.hasMany(Comment, { foreignKey: "post_id" });
Post.hasMany(Like, { foreignKey: "post_id" });
Post.hasMany(Report, { foreignKey: "post_id" });

// Comment Associations
Comment.belongsTo(User, { foreignKey: "user_id" });
Comment.belongsTo(Post, { foreignKey: "post_id" });

// Like Associations
Like.belongsTo(User, { foreignKey: "user_id" });
Like.belongsTo(Post, { foreignKey: "post_id" });

// Report Associations
Report.belongsTo(Post, { foreignKey: "post_id" });
Report.belongsTo(Report_type, { foreignKey: "report_type_id" });

// Report Types Associations
Report_type.hasMany(Report, { foreignKey: "report_type_id" });
