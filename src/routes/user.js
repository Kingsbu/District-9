let UserModel = require('../models/user.model')
let express = require('express')
let router = express.Router()

// CREATE a new user
// POST localhost:3000
router.post('/user', async (req, res) => {
    const user = new UserModel({
        name: req.body.name,
        email: req.body.email,
        age: req.body.age
    });
    try{
        const savedUserModel = await user.save()
        res.json(savedUserModel);
    } catch (err) {
        res.json( {message: err });
    }
});

// GET a user
router.get('/user', async (req, res) => {
    try {
        const user = await UserModel.find();
        res.json(user);
    } catch (err) {
        res.json({message: err});
    }
});

// GET user by Id
router.get('/user/:userId', async (req, res) => {
    try {
        const user = await UserModel.findById(req.params.userId);
        res.json(user);
    } catch (err) {
        res.json( { message: err });
    }
});
// UPDATE a user name by Id
router.patch('/user/:userId', async (req, res) =>{
    try {
        const updatedUser = await UserModel.updateOne( 
            {_id: req.params.userId}, 
            { $set: {name: req.body.name } }
            );
        res.json(updatedUser);
    } catch (err) {
        res.json( { message: err });
    }
});

// UPDATE a user name by Id
router.patch('/user/:userId', async (req, res) =>{
    try {
        const updatedUser = await UserModel.updateOne( 
            {_id: req.params.userId}, 
            { $set: {email: req.body.email } }
            );
        res.json(updatedUser);
    } catch (err) {
        res.json( { message: err });
    }
});

// UPDATE a user name by Id
router.patch('/user/:userId', async (req, res) =>{
    try {
        const updatedUser = await UserModel.updateOne( 
            {_id: req.params.userId}, 
            { $set: {age: req.body.age } }
            );
        res.json(updatedUser);
    } catch (err) {
        res.json( { message: err });
    }
});

// DELETE user by Id
router.delete('/user/:userId', async (req, res) => {
    try {
        const removedUser = await UserModel.deleteOne({ _id: req.params.userId });
        res.json(removedUser);
    } catch (err) {
        res.json( { message: err });
    }
});
module.exports = router