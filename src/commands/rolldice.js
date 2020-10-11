const { rollDice } = require('../utils/dicefunction');

module.exports = {
    run: async(client,message) => {
        message.reply("rolled a "+ rollDice());
    },

        aliases: ['dice','roll','diceroll'],
        description: 'roll dice'
}