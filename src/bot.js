require('dotenv').config();
const discord = require('discord.js');
const client =  new discord.Client();
const c = require('ansi-colors');
const fs = require('fs').promises;
const path = require('path');
const { checkCommandModule,checkProperties } = require('./utils/validate');
const tableConfig = require('./utils/tableConfig');
const { createStream, table } = require('table');
const commandStatus = [
    [`${c.bold('Command')}`, `${c.bold('Status')}`, `${c.bold('Description')}`]
];

const PREFIX = process.env.PREFIX;
client.mongo = require('./database/mongo');
client.mongo.init();
client.login(process.env.BOT_TOKEN);
client.commands = new Map();
client.on('ready', () => {
    console.log(`${client.user.tag} has logged in`);


    

    console.log(table(commandStatus));
});


client.on('message', async function(message) {
    if (message.author.bot) return;

    if (!message.content.startsWith(PREFIX)) return;
    let cmdName = message.content.substring(message.content.indexOf(PREFIX)+1).split(new RegExp(/\s+/)).shift();
    let argsToParse = message.content.substring(message.content.indexOf(' ')+1);


    if(client.commands.get(cmdName)) {
        client.commands.get(cmdName)(client,message,argsToParse);
    }
    if(message.content.startsWith(PREFIX) && !message.content.slice(PREFIX.length)) {
        1=1;
    }
    else {
        message.reply("Command doesnt exist!");
    }

    
    
   
});

(async function registerCommands(dir= 'commands') {
    //READ DIR
    let files = await fs.readdir(path.join(__dirname,dir));

    //loop for each file
    for (let file of files) {
        let stat = await fs.lstat(path.join(__dirname,dir,file));
        if(stat.isDirectory()) // if file is a directory, recursive call recurDir
            registerCommands(path.join(dir,file));
        else {
            if(file.endsWith(".js")) {
                let cmdName = file.substring(0,file.indexOf(".js"));
                try{
                    let cmdModule = require(path.join(__dirname,dir,file));
                    if(checkCommandModule(cmdName, cmdModule)) {
                        if(checkProperties(cmdName, cmdModule)) {
                            let { aliases } = cmdModule;
                            client.commands.set(cmdName,cmdModule.run);
                            if(aliases.length !== 0) {
                                aliases.forEach(alias => client.commands.set(alias, cmdModule.run));
                            commandStatus.push(
                                [`${c.cyan(`${cmdName}`)}`, `${c.bgGreenBright('Success')}`, `${cmdModule.description}`]
                                )
                    }
                }
             }
                    
        }
        catch(err){
            console.log(err);
            commandStatus.push(
                [`${c.white(`${cmdName}`)}`, `${c.bgRedBright('Failed')}`, '']
            );
        }
                
                
     }
  }
 }

})()