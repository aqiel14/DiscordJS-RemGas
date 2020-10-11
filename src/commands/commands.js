
const discord = require('discord.js');

module.exports = {
    run: async(client,message) => {

        const embed =  new discord.MessageEmbed()
                    .setColor('#90EE90')
                    .setTitle('Commands list'+count)
                    .addFields(
                        {name: '?tugas', value:"Masukkin tugas"},
                        {name: '?deadline', value: "Liat deadline-deadline tugas"},
                        {name: '?deltugas', value: "Delete tugas berdasarkan desc"}
                    )
        message.reply(commandembed);
    },
    
    aliases: ['commands','command'],
    description: 'see list of commands'
}