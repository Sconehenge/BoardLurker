// deploy-commands.js
// Registers the /hello guild command for quick development.

const { REST, Routes, SlashCommandBuilder } = require('discord.js');
require('dotenv').config();

const token = process.env.DISCORD_TOKEN;
const clientId = process.env.CLIENT_ID;
const guildId = process.env.GUILD_ID;

if (!token || !clientId || !guildId) {
  console.error('Missing environment variables. Please set DISCORD_TOKEN, CLIENT_ID, and GUILD_ID.');
  process.exit(1);
}

const commands = [
  new SlashCommandBuilder()
    .setName('hello')
    .setDescription('Replies with a friendly greeting.')
    .toJSON(),
];

const rest = new REST({ version: '10' }).setToken(token);

(async () => {
  try {
    console.log(`Registering ${commands.length} command(s) to guild ${guildId}...`);
    await rest.put(Routes.applicationGuildCommands(clientId, guildId), { body: commands });
    console.log('Successfully registered commands.');
  } catch (error) {
    console.error('Error registering commands:', error);
    process.exit(1);
  }
})();