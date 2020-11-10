const discord = require('discord.js');



module.exports = {
run: run = async(client,message,tugas,args) => {

    let query = message.content.slice(7).split(';');
    
    if(message.content === '?lobby') {
        const tutorialLobby = new discord.MessageEmbed()
        .setTitle('Cara ')
        .setDescription('d')
        .addFields(
            {name: 'Ikuti Contoh', value: 'd'}
        )
        message.reply(tutorialLobby);
    }
    else if (query.length === 5 && query[10].trim() != null) {



    const pengumpulan = message.content.slice(7).split(';')[0].trim();
    const matkul = message.content.slice(7).split(';')[1].trim();


        
        const embed =  new discord.MessageEmbed()
        .setColor('#00FF00')
        .setTitle('Teams')
        .setDescription('Map : ')
        .addFields(
            {name: 'Team1', value: Team1},
            {name: 'Team2', value: Team2}
        )
    
    } else {
        message.reply("Invalid Arguments!");
        console.log("a user had a valid arguments!");
    }
    

    

    console.log(message.content.replace(/\s+/g, '').slice(7).split(';'));

    

    // tugas.save().then(result => console.log(result)).catch(err =>console.error(err));
    

},
    aliases: ['lobby','valorant','lobby valorant'],
    description: 'mabar lobby valorant'
}


