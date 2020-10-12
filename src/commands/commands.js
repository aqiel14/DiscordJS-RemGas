
const discord = require('discord.js');

module.exports = {
    run: async(client,message) => {

        const commandembed =  new discord.MessageEmbed()
                    .setColor('#90EE90')
                    .setTitle('Commands list')
                    .addFields(
                        {name: '?tugas', value:"Masukkin tugas"},
                        {name: '?deadline', value: "Liat deadline-deadline tugas"},
                        {name: '?deltugas', value: "Delete tugas berdasarkan desc"},
                        {name: '?jadwal', value: 'lihat jadwal'}
                    )
        message.reply(commandembed);
    },
    
    aliases: ['commands','command'],
    description: 'see list of commands'
}