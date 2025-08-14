# hello-discord-bot

A tiny Discord bot (discord.js v14) that replies to `/hello` with a friendly greeting.

## Files included
- `package.json` — dependencies and start scripts
- `deploy-commands.js` — register the `/hello` guild command
- `index.js` — bot logic
- `.replit` — Replit run command (optional)
- `.env.example` — example environment variables

## Quick setup (local)
1. Clone this repository.
2. Create a Discord Application & Bot in the Developer Portal.
3. Copy the Bot Token and Application (Client) ID.
4. Enable Developer Mode in Discord and copy your test server (guild) ID.
5. Make a `.env` file (or set environment variables):
   ```text
   DISCORD_TOKEN=your-bot-token
   CLIENT_ID=your-client-id
   GUILD_ID=your-guild-id