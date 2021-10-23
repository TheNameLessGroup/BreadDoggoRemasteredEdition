import { TextChannel } from "discord.js";
import { ICommand } from "wokcommands";

export default {
    category: 'Configuration',
    description: 'Sends a message',

    minArgs: 2,
    expectedArgs: '<channel> <text>',
    expectedArgsTypes: ['CHANNEL', 'STRING'],

    slash: 'both',
    testOnly: true,
    guildOnly: true,

    callback: ({ message, interaction, args }) => {
        const channel = (message ? message.mentions.channels.first() : interaction.options.getChannel('channel')) as TextChannel
        if (!channel || channel.type !== 'GUILD_TEXT') {
            return 'Please tag a channel to send the msg'
        }

        args.shift()
        const text = args.join(' ')

        channel.send(text)

        if (interaction) {
            interaction.reply({
                content: 'The message has been sent',
                ephemeral: true
            })
        }
    }
} as ICommand
