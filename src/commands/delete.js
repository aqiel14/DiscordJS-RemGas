const mongoose = require ('mongoose');
const mongo = require('../database/mongo');
const Tugas = require('../database/models/tugasModel');
const discord = require('discord.js');
const PREFIX = process.env.PREFIX;

module.exports = {
    run: run = async(client,message,tugas,args) => {
        const query = message.content.slice(PREFIX.length).split(' ').slice(1).join(' ');
        // message.channel.send(query[1]);
        if (query) {
            message.reply('Menghapus tugas dengan deskripsi : '+query);
            Tugas.findOneAndDelete({
                Desc : {$eq: query}
            }, (err,res) => {
                if(err) {
                    console.log(err)
                } else if (res) {
                    const deleteEmbed = new discord.MessageEmbed()
        .setTitle('Tugas Deleted')
        .setDescription(query)
        message.reply(deleteEmbed);
                } else {
                    message.channel.send('tugas dengan desc '+query+' tidak ditemukan');
                }
            })



        } else if (!query) {
            const tutorialembed = new discord.MessageEmbed()
        .setTitle('Cara delete tugas')
        .setDescription('?deltugas <keyword Desc>')
        .addFields(
            {name: 'Ikuti Contoh : ', value: '?deltugas Interview empathy mapping'}
        )
        message.reply(tutorialembed);
        }


    }, aliases : ['delete','deltugas'],
        description: 'delete db'
}