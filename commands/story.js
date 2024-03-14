const { SlashCommandBuilder } = require('discord.js');
const fs = require('fs');
const { PrismaClient } = require('@prisma/client');
const sent = true
const prisma = new PrismaClient()

module.exports = {
    data: new SlashCommandBuilder()
        .setName('storytime')
        .setDescription('Choose your own story! WIP'),
    async execute(interaction) {
            const newUser = await prisma.story.findUniqueOrThrow({
                where: {
                  id: interaction.user.id,
                },
              }).catch(err => {                    

                    interaction.reply('You do not have a story yet! Let\'s make you one!\nWhat is your name?')
                    const filter = m => m.author.id == interaction.user.id
                    interaction.channel.awaitMessages({filter, max: 1, time: 15000, errors: ['time'] })
                        .then(collected => {
                            const usersname = collected.first().content
                            collected.first().channel.send('Great! Your name is '+ usersname + '!\nWhat is the name of your significant other?')
                            interaction.channel.awaitMessages({filter, max: 1, time: 15000, errors: ['time'] })
                             .then(collected => {
                            const userso = collected.first().content
                            collected.first().channel.send('Great! Your siginicant other\'s name is '+ userso + '!\nYou are walking down a trail when you see an older lady has fallen down, do you help them up?\n*(y/n)*');
                            interaction.channel.awaitMessages({filter, max: 1, time: 15000, errors: ['time'] })
                            .then(collected => {
                            const userhelp = collected.first().content
                            if (userhelp.toLowerCase() == 'y'){  }
                            }).catch(collected => {
                            interaction.followUp('Anyone there? I did not see an answer')})
                            }).catch(collected => {
                            interaction.followUp('Anyone there? I did not see an answer')})}
                        ).catch(collected => {
                            interaction.followUp('Anyone there? I did not see an answer')}
                       )
                    }
                )
    if (newUser != null){
    interaction.reply('You already have a story, would you like to start over?\n*(y/n)*')
        const filter = m => m.author.id == interaction.user.id
        interaction.channel.awaitMessages({filter, max: 1, time: 15000, errors: ['time'] })
        .then(collected => {
            const msg = collected.first().content
            if(msg.toLowerCase() == 'y'){
                interaction.channel.send('What is your name?')
                interaction.channel.awaitMessages({filter, max: 1, time: 15000, errors: ['time'] })
                .then(collected => {
                const usersname = collected.first().content
                collected.first().channel.send('Great! Your name is '+ usersname + '!\nWhat is the name of your significant other?')
                interaction.channel.awaitMessages({filter, max: 1, time: 15000, errors: ['time'] })
                .then(collected => {
                    userso = collected.first().content
                    collected.first().channel.send('Great! Your siginicant other\'s name is '+ userso + '!')
                }).catch(collected => {
                    interaction.followUp('Anyone there? I did not see an answer');
                })
                }).catch(collected => {
                    interaction.followUp('Anyone there? I did not see an answer');
                })
            }else(
                interaction.channel.send('That was not a valid answer. Please restart.'))
        }).catch(collected => {
            interaction.followUp('Anyone there? I did not see an answer');
        })}
    }
}
