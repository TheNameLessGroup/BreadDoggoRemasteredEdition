import { MessageEmbed } from "discord.js";
import { ICommand } from "wokcommands";

export default {
    name: 'help',
    aliases: ['h'],

    category: 'Information',
    description: 'Help command',

    slash: 'both',
    testOnly: true,

    callback: ({ message, interaction }) => {
        return 'No help for you'
    }
} as ICommand
