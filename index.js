const express = require('express');
const App = express();
const mongoose = require('mongoose');
const cookieSession = require('cookie-session');
const passport = require('passport');
const keys = require('./config/keys');
const bodyParser = require('body-parser');


App.use(bodyParser.urlencoded( {extended:false} ) )
App.use(bodyParser.json());

require('./models/users');
require('./services/passport');


mongoose.connect( keys.mongoURI, { useNewUrlParser: true, useUnifiedTopology: true} );


App.use(cookieSession( { 
      maxAge : 30 *  24 * 60 * 60 * 1000,
      keys : [keys.cookieKey],
} ) );


App.use( passport.initialize());
App.use(passport.session());



require('./routes/authRoutes') (App);

PORT = process.env.PORT || 8080;
App.listen(PORT);

if (process.env.NODE_ENV === 'production'){
      App.use(express.static('clientside/build'));
      
      const path = require('path');
      App.use('*', (req, res) => {
            res.sendFile(path.resolve(__dirname, 'clientside', 'build', 'index.html'));
      });
}


//84073497495-6sjf68pdk3p0igap085ed5b68nuea9o2.apps.googleusercontent.com
//arBI787ngnXBEKjqgaP4DjFv
