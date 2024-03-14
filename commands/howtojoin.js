const { SlashCommandBuilder, PermissionFlagsBits } = require('discord.js');
const { EmbedBuilder } = require('discord.js');
module.exports = {
	data: new SlashCommandBuilder()
		.setName('howtojoin')
		.setDescription('Sends the How to Join Embed')
		.setDefaultMemberPermissions(PermissionFlagsBits.Administrator)
		.setDMPermission(false),
	async execute(interaction) {
		await interaction.reply({ embeds: [
			new EmbedBuilder()
			.setColor(0xd62231)
			.setTitle('`How to join Spuds MC`')
			.addFields(
				{ name: ':desktop: **Java:**', value: '> • Click Multiplayer\n> • Click "Add Server"\n> • For the Server Address type: REDACTED\n> • Click Save and join the server!' },
			)
			.addFields(
				{ name: ':mobile_phone: **Mobile:**', value: '> • Click Servers\n> • Click "Add Server"\n> • For the Server Address type: REDACTED\n> • For the Port type __25249__\n> • Click Save and join the server!'},
			)
            .addFields(
				{ name: ':video_game: **Xbox/PlayStation/Switch:**', value: '> • [Tutorial on how to join](https://www.youtube.com/watch?v=1GrWQ8CdV5E)\n> • Name: Spuds MC\n> • IP: REDACTED\n> • Port: __25249__'},
			)
			.setTimestamp()
			],
		});
		
	},
};