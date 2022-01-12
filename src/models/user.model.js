let mongoose = require('mongoose');

const server = '';
const database = 'district9';
const user = 'Aminu';
const password = 'AG41';

mongoose.connect(`mongodb+srv://${user}:${password}@cluster0.faypm.mongodb.net/${database}?retryWrites=true&w=majority`);

let UserSchema = new mongoose.Schema({
    name: String,
    email: {
        type: String,
        require: true,
        unique: true
    },
    age: Number
});

module.exports = mongoose.model('User', UserSchema);