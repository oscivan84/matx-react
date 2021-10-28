

const express = require('express'),
      path = require('path'),
      morgan = require('morgan'),
      mysql = require('mysql'),
      myConnection = require('express-myconnection');

const app = express();

// importing routes
const customerRoutes = require('./routes/customer');

// settings
app.set('port', process.env.PORT || 3200);


// middlewares
app.use(morgan('dev'));
app.use(express.json());

// starting the server


app.listen(app.get('port'), () => {
  console.log(`server on port ${app.get('port')}`);
});

// routes
app.use(require('./routes/customer'));

// static files
//app.use(express.static(path.join(__dirname, 'public')));


