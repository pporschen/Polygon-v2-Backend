const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://pporschen:h8NzZuVjc3Jlkh7w@cluster0.owggm.mongodb.net/polygo?retryWrites=true&w=majority', { useNewUrlParser: true, useUnifiedTopology: true });

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => console.log("connected"));

module.exports = db;