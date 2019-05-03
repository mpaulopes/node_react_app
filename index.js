const express = require('express');
const mongoose = require('mongoose');
const keys = require('./config/keys');
require('./models/User');
require('./services/passport');

mongoose.connect(keys.mongoURI);

const app = express();

//this syntax bellow is used when there is no need to create a instantiated varible. it's a single case as opposed to => const authRoutes = require('./routes/authRoutes')

require('./routes/authRoutes')(app); 


const PORT = process.env.PORT || 5000;
app.listen(PORT);

