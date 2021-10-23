import { Client } from "discord.js";
import { ICommand } from "wokcommands";

const setStatus = (client: Client, status: string) => {
    client.user?.setPresence({
        status: 'online',
        activities: [
            {
                name: status
            },
        ],
    });
};

export default {
    category: 'Configuration',
    description: 'Updates the status of Bread owo',

    slash: 'both',
    testOnly: true,
    guildOnly: true,

    minArgs: 1,
    expectedArgs: '<status>',

    init: (client: Client) => {
        const status = 'Bread is vibing again'
        setStatus(client, status);
    },

    callback: ({ client, text }) => {
        setStatus(client, text);

        return 'Oi, why you change le Bread status eh'
    }
} as ICommand
