const discord = require('discord.js');
const PREFIX = process.env.PREFIX;
const axios = require('axios');

module.exports = {
    run: run = async(client,message,args) => {
        const query = message.content.slice(PREFIX.length).split(' ').slice(1).join(' ');
        // message.channel.send(query[1]);
        if (query) {
            axios.get(query)
            .then(result => {
                message.reply(result);
            }).catch(err=> {
                console.log(err);
            })

        } else {

        }
    }, aliases : ['fetch','ambil'],
        description: 'ambil API'
}