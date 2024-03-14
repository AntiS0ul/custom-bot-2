const {
  SlashCommandBuilder,
  Client,
  GatewayIntentBits,
  PermissionFlagsBits,
  ActionRowBuilder,
  ButtonBuilder,
  ButtonStyle,
  EmbedBuilder,
  Events,
  ModalBuilder,
  TextInputBuilder,
  TextInputStyle,
} = require("discord.js");

const allowed = ["798689472799309904", "692556883470450762", "470663600206381056"]

const trainingrow = new ActionRowBuilder()
.addComponents(
    new ButtonBuilder()
        .setCustomId('rankdone')
        .setLabel('Completed')
        .setStyle(ButtonStyle.Success),

);

module.exports = {
	name: 'interactionCreate',
	once: false,
	async execute(interaction,client) {



    
            }}