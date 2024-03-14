const { SlashCommandBuilder, PermissionFlagsBits, EmbedBuilder } = require('discord.js')
module.exports = {
    data: new SlashCommandBuilder()
              .setName('store')
              .setDescription('Sends Store Link'),
    async execute(interaction) {
        const links = [
            "REDACTED",
            "***We are currently giving away our first rank for free!***",
        ];
        const linkbed = new EmbedBuilder()
        .setColor(0xd62231)
        .setTitle("Store")
        .setDescription("Click here to view our store!!\n> "+ links.join("\n> "))
        interaction.reply({ embeds: [linkbed] })
    }
}