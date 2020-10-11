const mongoose = require('mongoose');
const tugasSchema =new mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    Author: String,
    DatePosted: Date,
    Pengumpulan: String,
    Matkul: String,
    Jenis: String,
    Desc: String,
    Deadline: Date
    
});

module.exports = mongoose.model('Tugas',tugasSchema,'tugas');