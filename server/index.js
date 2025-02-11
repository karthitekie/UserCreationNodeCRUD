const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const UserModel = require('./models/Users'); 


const app = express();

// Middleware
app.use(cors());
app.use(express.json());

//Get route to all user
app.get('/', (req, res) => {
    UserModel.find({})
    .then(users => res.json(users))
    .catch(err => res.json(err))
})

//Get route indiviual Id
app.get('/getUser/:id', (req, res) => {
    const id = req.params.id;
    UserModel.findById({_id:id})
    .then(users => res.json(users))
    .catch(err => res.json(err))
})

// Put Route for indiviual Id
app.put('/updateUser/:id', (req, res) => {
    const id = req.params.id;
    UserModel.findByIdAndUpdate({_id:id}, {name:req.body.name, email: req.body.email, age:req.body.age})
    .then(users => res.json(users))
    .catch(err => res.json(err))
})

// Delete for indiviual Id

app.delete('/deleteUser/:id', (req, res) => {
    const id = req.params.id;
    UserModel.findByIdAndDelete({_id:id})
    .then(users => res.json(users))
    .catch(err => res.json(err))
})

// MongoDB connection
mongoose.connect("mongodb://127.0.0.1:27017/crud")
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((err) => {
    console.log('MongoDB connection error:', err);
  });

// POST route to create a new user
app.post("/createUser", (req, res) => {
  UserModel.create(req.body)
    .then(user => res.json(user))  
    .catch(err => res.status(500).json({ error: err.message }));  
});

// Start the server
app.listen(3001, () => {
  console.log("Server is running on http://localhost:3001");
});


