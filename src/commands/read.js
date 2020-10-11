const mongo = require('../database/mongo');
const Tugas = require('../database/models/tugasModel');
const discord = require('discord.js');


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
                
                
                // if(res.length) {
                    const embed =  new discord.MessageEmbed()
                    .setColor('#DC143C')
                    .setTitle('Tugas #'+count)
                    .setDescription('KErJAIN SEKARANG!!!!')
                    .addFields(
                        {name: 'Yang masukkin Tugas', value:element.Author},
                        {name: 'Matkul', value: element.Matkul},
                        {name: 'Desc', value: element.Desc},
                        {name: 'Individu/Kelompok', value : element.Jenis},
                        {name: 'Pengumpulan', value: element.Pengumpulan},
                        {name: 'Deadline', value: element.Deadline}
                    )
            
                            message.channel.send(embed);
                            console.log(element.Pengumpulan);
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


