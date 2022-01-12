let LawyerModel = require('../models/lawyer.model')
let express = require('express')
let router = express.Router()

// Create a new lawyer
// POST localhost:5000
router.post('/lawyer', async (req, res) => {
    const lawyer = new LawyerModel({
        name: req.body.name,
        number: req.body.number,
        practicing: req.body.practicing,
        province: req.body.province,
        type: req.body.type
    });
    try{
        const savedLawyerModel = await lawyer.save()
        res.json(savedLawyerModel);
    } catch (err) {
        res.json( {message: err });
    }
});
// GET a lawyer
router.get('/lawyer', async (req, res) => {
    try {
        const lawyer = await LawyerModel.find();
        res.json(lawyer);
    } catch (err) {
        res.json({message: err});
    }
});

// GET lawyer by Id
router.get('/lawyer/:lawyerId', async (req, res) => {
    try {
        const lawyer = await LawyerModel.findById(req.params.lawyerId);
        res.json(lawyer);
    } catch (err) {
        res.json( { message: err });
    }
});


// DELETE lawyerer by Id
router.delete('/lawyer/:lawyerId', async (req, res) => {
    try {
        const removedLawyer = await LawyerModel.deleteOne({ _id: req.params.lawyerId });
        res.json(removedLawyer);
    } catch (err) {
        res.json( { message: err });
    }
});
module.exports = router