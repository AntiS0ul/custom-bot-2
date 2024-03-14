const { SlashCommandBuilder } = require('discord.js');
module.exports = {
  data: new SlashCommandBuilder()
      .setName('userinfo')
      .setDescription('sends information about your account')
      .addMentionableOption(option =>
        option.setName('id')
          .setDescription("user to lookup")
          .setRequired(false)),
  async execute(interaction) {
    const userID = interaction.options.getUser('id');
    if(userID == null){
      let userID = interaction.user
      if(interaction.user.id == 'REDACTED'){
        interaction.reply("**Your tag:** " + userID.tag + " *my owner*\n**Your id:** " + userID.id + "\n**Account created on: **" + userID.createdAt);
      }else{
        interaction.reply("**Your tag:** " + userID.tag + "\n**Your id:** " + userID.id + "\n**Account created on: **" + userID.createdAt);
      }
    }else{
      if(userID.id == 'REDACTED'){
        interaction.reply("**Your tag:** " + userID.tag + " *my owner*\n**Your id:** " + userID.id + "\n**Account created on: **" + userID.createdAt);
      }else{
        interaction.reply("**Your tag:** " + userID.tag + "\n**Your id:** " + userID.id + "\n**Account created on: **" + userID.createdAt);
      }
    }
  }
}
