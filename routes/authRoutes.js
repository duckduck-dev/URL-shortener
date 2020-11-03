const passport = require('passport');
const mongoose = require('mongoose');
var shortUrl = require('node-url-shortener');
 

const Users = mongoose.model('users');

var squeezedURL;

var val;

module.exports = function(App) {

            App.get('/auth/google', passport.authenticate('google', {
                  scope : ['profile', 'email']
            }));

            App.get('/auth/google/callback', passport.authenticate('google'), (req, res) => {
                  res.redirect('/Home');
            } );


            App.get('/postData', (req, res)=> {
                  Users.findById(req.user.id)
                  .then((usr) => {usr.link.push({Link:'localhost:8080/test'}) 
                  return usr.save() });
            } );

            App.get('/api/current_user', (req, res) => {
                  res.send(req.user);
            });
            
            App.post('/api/postLink', (req, res) => {
                  val = req.body.value;
                  Users.findById(req.user.id)
                  .then(() => Users.findById(req.user.id))
                  /*.then((usr) => {usr.link.push({Link: val/*short: shortUrl.short(val, async (err, url) => await url)}) 
                  return usr.save() })*/
                  .then( () => {
                    
                              shortUrl.short(val, (err, url) => {
                                    Users.findById(req.user.id)
                                    .then((usr) => {usr.link.push({Link: val, short: url  }) 
                                    return usr.save() })
                                    .then(() => res.send(req.user));
                             //return res.send(req.user);
                        } );
                       // return res.send(req.user);
                  });  
            });

            App.get('/api/logout', (req, res)=> {
                  req.logout();
                  res.redirect('/');
            });


            App.get('/api/getSqueezedURL', (req, res) => {

                  shortUrl.short(squeezedURL, function(err, url){
                        console.log(url);
                  });
                  res.send(req.user);
            });
};
