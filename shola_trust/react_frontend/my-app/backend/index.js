const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());

// MongoDB connection
const mongoUrl = 'mongodb+srv://akasheducation10:RiOs8X8OMbpkCGnq@cluster0.m7i8xqg.mongodb.net/myDatabase?retryWrites=true&w=majority';
mongoose.connect(mongoUrl, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connected to database'))
  .catch(e => console.log(e));

// Importing routes
const ngoRoutes = require('./routes/ngoRoutes');
app.use('/api', ngoRoutes);

app.get('/', (req, res) => res.send('Success!!!!!!'));

app.listen(5000, () => {
  console.log('Server Started on port 5000');
});
