const interactionCreate = require("./interactionCreate")
const {
	Client,
	Collection,
	Events,
	GatewayIntentBits,
	GuildExplicitContentFilter,
	Message,
	EmbedBuilder,
	REST,
	Routes,
	message,
	guild,
	GuildMember,
  } = require("discord.js");

module.exports = {
	name: 'messageCreate',
	once: false,
	async execute(message,client,math,DirectMessages,Guild,GuildMember)  {

}
}