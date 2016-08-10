const users = require('./users');
const games = require('./games');

function index(req, res) {
  console.log(res.app.locals);
  console.log(req.cookies);
}

module.exports = {
  index,
  users,
  games,
};
