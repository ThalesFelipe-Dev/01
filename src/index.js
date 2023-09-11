const express = require('express');//require = import
const app = express();
app.use(express.json());// express.jason = native middleware of express

const routes = require('./routes');
app.use(routes);// use = middleware



app.listen(3000);
