/**
 * This file provided by Facebook is for non-commercial testing and evaluation
 * purposes only. Facebook reserves all rights not expressly granted.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL
 * FACEBOOK BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN
 * ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION
 * WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
 */

var
  fs = require('fs'),
  path = require('path'),
  favicon = require('serve-favicon'),
  express = require('express'),
  bodyParser = require('body-parser'),
  logger  = require('morgan'),
  app = express(),
  routes = require('./routes');

app.set('port', (process.env.PORT || 3001));
app.use('/', express.static(path.join(__dirname, '../public')));
app.use(logger('dev'));
app.use(favicon(path.join(__dirname, '../public/static/img/favicon.ico')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// To resolve broswer history url
app.get('/api/users', routes.users.all);
app.post('/api/update', routes.users.update);

app.get('/api/games', routes.games.all);
app.post('/api/games', routes.games.update);

app.get('*', function (req, res){
  res.sendFile(path.resolve(__dirname, '../public', 'index.html'));
});

// API Routing for Users
// TO test using curl
// curl --data "param1=value1&param2=value2" http://localhost/api/user_add etc.

//app.post('/api/login',isAuthenticated, routes.users.login);
//app.post('/api/user_add', routes.users.add);
//app.post('/api/user_del', routes.users.del);
//app.post('/api/user_list', routes.users.list);
//app.post('/api/user_single', routes.users.single);
//app.post('/api/register', routes.users.register);
//app.post('/api/checkAccountExisted', routes.users.checkAccountExisted);


app.listen(app.get('port'), function() {
  console.log('Server started: http://localhost:' + app.get('port') + '/');
});
