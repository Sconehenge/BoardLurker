// index.js
// Main bot: logs in and responds to the /hello slash command

const { Client, GatewayIntentBits } = require('discord.js');
require('dotenv').config();

const token = process.env.DISCORD_TOKEN;
if (!token) {
  console.error('Please set the DISCORD_TOKEN environment variable.');
  process.exit(1);
}

const client = new Client({ intents: [GatewayIntentBits.Guilds] });

client.once('ready', () => {
  console.log(`✅ Logged in as ${client.user.tag} — ready to respond to /hello`);
});

client.on('interactionCreate', async (interaction) => {
  try {
    if (!interaction.isChatInputCommand()) return;

    if (interaction.commandName === 'hello') {
      await interaction.reply(`Hello, ${interaction.user.username}! 👋`);
    }
  } catch (err) {
    console.error('Error handling interaction:', err);
    if (interaction.replied || interaction.deferred) return;
    await interaction.reply({ content: 'Sorry — something went wrong.', ephemeral: true });
  }
});

client.login(token);