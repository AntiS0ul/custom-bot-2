const { SlashCommandBuilder, PermissionFlagsBits, EmbedBuilder } = require('discord.js')
module.exports = {
    data: new SlashCommandBuilder()
              .setName('votelinks')
              .setDescription('Sends Vote Links'),
    async execute(interaction) {
        const links = [
            "REDACTED"
        ];
        const linkbed = new EmbedBuilder()
        .setColor(0xd62231)
        .setTitle("VOTING LINKS")
        .setDescription("Click these to vote!\n> "+ links.join("\n> "))
        interaction.reply({ embeds: [linkbed] })
    }
}