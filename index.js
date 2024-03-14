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
} = require("discord.js");
const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.GuildMembers,
    GatewayIntentBits.MessageContent,
	GatewayIntentBits.DirectMessages,
  ],
});
const { clientId, guildId } = require("./config/config.json");
const {token} = require("./config/token");
const fs = require("node:fs");
const path = require("node:path");
const { channel } = require("node:diagnostics_channel");
const { math } = require("mathjs")




client.commands = new Collection();
const commandsPath = path.join(__dirname, 'commands');
const commandFiles = fs.readdirSync(commandsPath).filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
	const filePath = path.join(commandsPath, file);
	const command = require(filePath);
	client.commands.set(command.data.name, command);
}



// Events Handlers

const eventsPath = path.join(__dirname, 'events');
const eventFiles = fs.readdirSync(eventsPath).filter(file => file.endsWith('.js'));

for (const file of eventFiles) {
	const filePath = path.join(eventsPath, file);
	const event = require(filePath);
	if (event.once) {
		client.once(event.name, (...args) => event.execute(...args));
	} else {
		client.on(event.name, (...args) => event.execute(...args, client,message));
	}
}


client.on(Events.InteractionCreate, async interaction => {
	if (!interaction.isChatInputCommand()) return;


    const command = interaction.client.commands.get(interaction.commandName);

	if (!command) {
		console.error(`No command matching ${interaction.commandName} was found.`);
		return;
	}

	try {
		await command.execute(interaction);
	} catch (error) {
		console.error(error);
		
	}
	console.log('Command ran successfully by ' + interaction.user.tag);
})

client.once('ready', () => {
	console.log('Ready!');
	const users = client.guilds.cache.reduce((a, g) => a+g.memberCount, 0)
  	client.user.setActivity(`with ${users} people`)
	client.channels.cache.get('REDACTED').send('Bot is turning on!')
});



client.login(token);