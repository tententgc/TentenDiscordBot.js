const { Client, Intents, MessageActionRow } = require('discord.js'); // Import discord.js 
const config = require('./config.json');


const client = new Client({
    intents: [
        Intents.FLAGS.GUILDS,
        Intents.FLAGS.GUILD_MESSAGES,
    ]
});

const random_num = () => {
    return Math.floor(Math.random() * 5);
}

client.once('ready', () => {
    console.log("CareSasi is ready!");  // When the bot is ready, print "CareSasi is ready!"
});

client.on('messageCreate', msg => {

    if (!msg.content.startsWith(config.prefix)) return; // If the message doesn't start with the prefix, return.

    const args = msg.content.substring(config.prefix.length).split(/ +/);

    switch (args[0]) {
        case "hello":
            msg.reply("Hello!"); 

            break;

        case "say":
            msg.reply(args.slice(1).join(" ")); // Reply with the message after the command.

            break;
    }

});

client.login(config.token); // Login to discord 