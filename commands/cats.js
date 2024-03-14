const { SlashCommandBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('cat')
        .setDescription('Sends a random cat gif'),
    async execute(interaction) {
        const gif_list = [
            "https://media.tenor.com/zrpyKEyxZGwAAAAM/fat-cat-laser-eyes.gif",
            "https://media.tenor.com/fTTVgygGDh8AAAAM/kitty-cat-sandwich.gif",
            "https://media1.giphy.com/media/ICOgUNjpvO0PC/giphy.gif",
            "https://media2.giphy.com/media/LqVHd24x3QoWA/200w.gif?cid=6c09b952i08t3rjehuhz6kigqjbon7j12nlhx6xh4lsal9h5&rid=200w.gif&ct=g",
            "https://media.tenor.com/Fr1Rd7pazC8AAAAM/nice-cat.gif",
            "https://media.tenor.com/9SRPROM5RAcAAAAM/kitten-kitty.gif",
            "https://media2.giphy.com/media/YRVP7mapl24G6RNkwJ/200w.gif?cid=6c09b9520xa26vbapq7f1x6t76vtap8h73galzwmdeu6a4sa&rid=200w.gif&ct=g",
            "https://media.tenor.com/aIPmD6Nsnt8AAAAM/cat-cats.gif",
            "https://media.tenor.com/ZhfMGWrmCTcAAAAC/cute-kitty-best-kitty.gif",
            "https://tenor.com/view/cat-donce-gif-24287595",
            "https://tenor.com/view/cat-gif-25491298",
            "https://tenor.com/view/cat-funny-cat-memes-gif-25643419",
            "https://tenor.com/view/cat-kitten-scare-scared-cat-scared-gif-24306961",
            "https://tenor.com/view/cats-catitude-cattitude-cat-attitude-what-gif-22504374",
            "https://tenor.com/view/catjam-cat-dancing-cat-music-music-cat-cute-cat-gif-23392229",
            "https://tenor.com/view/cat-gif-26024766",
            "https://tenor.com/view/kitty-gif-25898773",
            "https://tenor.com/view/cat-cats-cat-love-cat-kiss-kiss-gif-24653113",
            "https://tenor.com/view/cat-gif-26293253",
            "https://tenor.com/view/jambo-jschlatt-whatever-huh-meme-jambo-schlatt-gif-25590760",
            "https://tenor.com/view/cat-shocked-woah-gif-26558267",
            "https://tenor.com/view/thinking-cat-gif-25591285",
            "https://tenor.com/view/cat-kiss-gif-25376137",
            "https://tenor.com/view/jinx-the-cat-jinx-jinx-cat-cat-computer-gif-25786466",
            "https://tenor.com/view/cat-gif-26024760",
            "https://tenor.com/view/cat-typing-gif-22904866",
            "https://giphy.com/gifs/kitten-choreography-a-chorus-line-Xf8D9Qf8OCKnMvNnru",
            "https://giphy.com/gifs/cute-cats-pV0RpkmUZ5UB2",
            "https://giphy.com/gifs/cat-cats-cute-BZTgEDfvMwiZKeQ5nh",
            "https://tenor.com/view/cute-cat-gif-25910152",
            "https://tenor.com/view/mochi-mochi-peach-cat-cute-kitty-cats-pat-head-gif-17748866"
        ]
        interaction.reply(gif_list[Math.floor(Math.random()*gif_list.length)])
    }
}