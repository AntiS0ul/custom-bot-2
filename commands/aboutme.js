const { SlashCommandBuilder, PermissionFlagsBits, Client, GatewayIntentBits } = require('discord.js');
const client = new Client({
	intents: [
		GatewayIntentBits.Guilds,
		GatewayIntentBits.GuildMessages,
		GatewayIntentBits.MessageContent,
		GatewayIntentBits.GuildMembers,
		GatewayIntentBits.MessageContent,
	],
});
const { EmbedBuilder } = require('discord.js');
const { clientId } = require("../config/config.json")
var os = require('os');
const totalram = ((os.totalmem() / 10**6 + " ").split('.')[0]);
const freeram = ((os.freemem() / 10**6 + " ").split('.')[0]);
const usedram = (((os.totalmem() - os.freemem()) / 10**6 + " ").split('.')[0]);
const prctfreeram = (((os.freemem() * 100) / os.totalmem + " ").split('.')[0]);
const embed = new EmbedBuilder()
    .setTitle("Statistics")
    .setDescription("Stats of the bot")
    .addFields(
      { name: 'Memory (RAM)', value: `Total Memory: ${totalram}MB\nUsed Memory: ${usedram}MB\nFree Memory: ${freeram}MB\nPercentage Of Free Memory: ${prctfreeram}%`},
    )
    .addFields(
        { name: 'Client ID', value: clientId,}
    )
    .setTimestamp()
    .setFooter({ text: 'Made with love by AntiS0ul <3' })
module.exports = {
	data: new SlashCommandBuilder()
		.setName('aboutme')
		.setDescription('Sends info about the bot')
		.setDefaultMemberPermissions(PermissionFlagsBits.Administrator)
		.setDMPermission(true),
	async execute(interaction) {
        if(interaction.user.id == 'REDACTED'){
        interaction.user.send({embeds: [embed]   
        })
        interaction.reply('Sent')}
        else{
            interaction.reply('You do not have permission to run this command!')
        };
}};





