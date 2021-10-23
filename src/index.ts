import DiscordJS, { Intents } from 'discord.js';
import path from 'path';
import WOKCommands from 'wokcommands';
import 'dotenv/config'

const client = new DiscordJS.Client({
    intents: [
        Intents.FLAGS.GUILDS,
        Intents.FLAGS.GUILD_MESSAGES,
        Intents.FLAGS.DIRECT_MESSAGE_REACTIONS,
        // Intents.FLAGS.GUILD_PRESENCES
    ]
})

client.on('ready', () => {
    console.log('Bread is vibing');

    new WOKCommands(client, {
        commandDir: path.join(__dirname, '../commands'),

        botOwners: ['743065409120632915', '705788785891344474', '707821823915589653', '418716528565813250', '752549239120461865'],
        testServers: ['786280812295225384'],

        disabledDefaultCommands: [
            'help',
            'command',
            'prefix',
            'requiredrole',
            'language',
            'slash',
            'channelonly'
        ],

        mongoUri: process.env.MONGO_URI,

        dbOptions: {
            keepAlive: true,
        },

        typeScript: true,
    })

    .setDefaultPrefix(',')
})

client.login(process.env.TOKEN);
