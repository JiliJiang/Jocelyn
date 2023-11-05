const User = require('./UserModel');
// const PostModel = require('./PostModel');
// const CommentModel = require('./CommentModel');

// UserModel.hasMany(PostModel, {
//     foreignKey: 'user_id',
//     onDelete: 'CASCADE'
// });

// PostModel.belongsTo(UserModel, {
//     foreignKey: 'user_id'
// });

// CommentModel.belongsTo(PostModel, {
//     foreignKey: 'user_id'
// });

module.exports = { User };