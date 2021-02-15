const discord = require('discord.js');

module.exports = {
  run: async (client, message) => {
    const jadwalembed = new discord.MessageEmbed()
      .setColor('#90EE90')
      .setTitle('Jadwal')
      .setImage('https://i.imgur.com/QfUAPaI.png');
    message.reply(jadwalembed);
  },

  aliases: ['jadwal', 'schedule'],
  description: 'lihat jadwal EISD',
};
