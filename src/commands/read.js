const mongo = require('../database/mongo');
const Tugas = require('../database/models/tugasModel');
const discord = require('discord.js');
var moment = require('moment');


module.exports = {
run: run = async(client,message,tugas) => {
    
    //declare current date
    const currentdate = new Date();
    let count = 0;
    //find date
    Tugas.find({
        "Matkul" : {$type: "string"},
         "Jenis" : {$type: "string"},
         "Pengumpulan" : {$type: "string"},
         "Desc" : {$type: "string"},
         "Author": {$type: "string"},
        "Deadline" : { $gte: currentdate}
    },null,{sort: 'Deadline'}, (err,res) => {
        if(err) {
            console.log("ERROR: "+err)
        }
        
        else if(res) {
            res.forEach(element => {
                count++;

                let time = element.Deadline - currentdate;
                let seconds = moment.duration(time).seconds();
                let minutes = moment.duration(time).minutes();
                let hours   = moment.duration(time).hours();
                let days    = moment.duration(time).days();
                let timeRemaining = days+' Days '+hours+' Hours Remaining'
                
                const format = moment().format(element.Deadline)
                console.log(format)
                
                // if(res.length) {
                    const embed =  new discord.MessageEmbed()
                    .setColor('#DC143C')
                    .setTitle('Tugas #'+count)
                    .addFields(
                        {name: 'Matkul', value: element.Matkul},
                        {name: 'Desc', value: element.Desc},
                        {name: 'Individu/Kelompok', value : element.Jenis},
                        {name: 'Pengumpulan', value: element.Pengumpulan},
                        {name: 'Yang masukkin Tugas', value:element.Author},
                        {name: 'Deadline', value: element.Deadline},
                        {name: 'Time Remaining' ,value: timeRemaining}
                    )
            
                            message.channel.send(embed);
                            // console.log(res[0].Matkul);
                // } else {
                //     message.reply("Lagi gak ada tugas euy");
                // }
                
            
            })

        } else {
            message.channel.send("lagi gaada tugas euy");
        }
    } 
    )
    

},
    aliases: ['read','deadline'],
    description: 'simpen db'
}


