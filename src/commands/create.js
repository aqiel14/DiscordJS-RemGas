const mongoose = require('mongoose');
const mongo = require('../database/mongo');
const Tugas = require('../database/models/tugasModel');
const discord = require('discord.js');



module.exports = {
run: run = async(client,message,tugas,args) => {

    let query = message.content.slice(7).split(';');
    if(message.content === '?tugas') {
        const tutorialembed = new discord.MessageEmbed()
        .setTitle('Cara post tugas')
        .setDescription('?tugas pengumpulan(LMS/etc) ; Mata Kuliah ; Jenis Tugas (Kelompok/Individu) ; deskripsi tugas ; deadline(copas dari LMS(TIPE DATA HARUS `DATE` GAES)')
        .addFields(
            {name: 'Ikuti Contoh', value: '?tugas LMS;TKMTI;kelompok;Proses cobit 5;10 October 2020, 11:15 PM'}
        )
        message.reply(tutorialembed);
    }
    else if (query.length === 5) {


    const pengumpulan = message.content.slice(7).split(';')[0].trim();
    const matkul = message.content.slice(7).split(';')[1].trim();
    const jenis = message.content.slice(7).split(';')[2].trim();
    const description = message.content.slice(7).split(';')[3].trim();
    const deadline = message.content.slice(7).split(';')[4].trim();

        tugas = new Tugas({
            _id: mongoose.Types.ObjectId(),
            Author: message.author.tag,
            DatePosted: new Date(),
            Pengumpulan: pengumpulan,
            Matkul: matkul,
            Jenis: jenis,
            Desc: description,
            Deadline: deadline
        });
    
        const embed =  new discord.MessageEmbed()
        .setColor('#00FF00')
        .setTitle('Tugas Posted')
        .setDescription('Tugas')
        .addFields(
            {name: 'Author', value: message.author.tag},
            {name: 'Pengumpulan', value: pengumpulan},
            {name: 'Mata Kuliah', value : matkul},
            {name: 'Jenis Tugas', value: jenis},
            {name: 'Deskripsi', value:description},
            { name: 'Date Posted', value: new Date()},
            { name: 'Deadline', value: deadline}
        )
    
        tugas.save()
        .then(result => 
            console.log(result), message.channel.send(embed))
        .catch(err => console.log(err));
    
    
    } else {
        message.reply("Invalid Arguments!");
        console.log("a user had a valid arguments!");
    }
    

    

    console.log(message.content.replace(/\s+/g, '').slice(7).split(';'));

    

    // tugas.save().then(result => console.log(result)).catch(err =>console.error(err));
    

},
    aliases: ['create','tugas'],
    description: 'create db'
}


