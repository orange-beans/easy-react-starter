let
  input,
  add, del,
  list, single,
  login, register,
  all, update;

// Put your own APIs here
let games = [
  { id: 1, name:'StarCraft 2', active:true },
  { id: 2, name:'Rome 2', active:true },
  { id: 3, name:'DOTA 2', active:true },
];

// Simulate to return users information
all = function(req, res, next) {
  res.json(games);
};

// Note that you need to reply otherwise client side will always be pending
update = function(req, res, next) {
  console.log(req.body);
  games = req.body;
  res.send(200);
};

input = function (req, res, next){
  res.render('users', { title: 'Hello Beans!' });

};

// Add one new user into the database
//
add = function (req, res, next){
  console.log('add test ----------');
  console.log(req.body);

  //addUser(req, res, next);
  res.json({ status: true });
};

// Delete one user from the list
//
del = function (req, res, next) {
  console.log(req.body);
};

// List down all available users
//
list = function (req, res, next){

};

// Display a single user info
single = function (req, res, next){

};


module.exports = {
  input,
  single,
  list,
  add,
  del,
  login,
  register,
  all, update,
};
