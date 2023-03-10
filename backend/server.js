require('dotenv').config(); //require and directly invoke the config method

const express = require('express');
const mongoose = require('mongoose');
const patientRoutes = require('./routes/patientRoutes');
const servicesRoutes = require('./routes/servicesRoutes');
const billRoutes = require('./routes/billRoutes');
const expensesRoutes = require('./routes/expensesRoutes')
//express app
const app = express(); //invokes the function

//middleware
app.use(express.json()); //if the request has a body or data then it passes and attaches to req object

app.use((req, res, next) => {
  // next is used to move to the next piece of middleware
  console.log(req.path, req.method);
  next();
}); //this function will fire for every request

//routes
app.use('/api/patients/', patientRoutes);
app.use('/api/services/', servicesRoutes);
app.use('/api/bills/', billRoutes);
app.use('/api/expenses/', expensesRoutes);

//connect to db
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    //listen for requests
    app.listen(process.env.PORT, () => {
      //process is a global object available in node
      console.log(`connected to db and listening on port ${process.env.PORT}`);
    });
  })
  .catch((error) => {
    console.log(error);
  });
