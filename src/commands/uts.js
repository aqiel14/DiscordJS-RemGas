
const discord = require('discord.js');

module.exports = {
    run: async(client,message) => {

        const jadwalembed =  new discord.MessageEmbed()
                    .setColor('#90EE90')
                    .setTitle('Jadwal UTS')
                    .setImage('https://i.imgur.com/yuMq97H.png')
        message.reply(jadwalembed);
    },
    
    aliases: ['jadwaluts','uts'],
    description: 'lihat jadwal UTS'
}