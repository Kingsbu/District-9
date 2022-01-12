let mongoose = require('mongoose');

const server = '';
const database = 'district9';
const user = 'Aminu';
const password = 'AG41';

mongoose.connect(`mongodb+srv://${user}:${password}@cluster0.faypm.mongodb.net/${database}?retryWrites=true&w=majority`);

let LawyerSchema = new mongoose.Schema({
    name: String,
    number: Number,
    practicing: String,
    province: String,
    type: String
});

module.exports = mongoose.model('Lawyer', LawyerSchema);