// Claw Academy Discord Bot
// Run: node discord-bot.js

const { Client, GatewayIntentBits, ChannelType, PermissionFlagsBits } = require('discord.js');

const config = {
  serverName: 'Claw Academy',
  token: process.env.DISCORD_TOKEN // Set your bot token
};

const channels = [
  { name: 'start-here', type: ChannelType.GuildText, description: 'Start here! Read first' },
  { name: 'introductions', type: ChannelType.GuildText, description: 'Say hello!' },
  { name: 'general', type: ChannelType.GuildText, description: 'Chat about anything' },
  { name: 'help', type: ChannelType.GuildText, description: 'Get help with OpenClaw' },
  { name: 'showcase', type: ChannelType.GuildText, description: 'Show what you\'re building' },
  { name: 'news', type: ChannelType.GuildText, description: 'New lessons & updates' },
];

const roles = [
  { name: 'Student', color: '#00ff88' },
  { name: 'Graduate', color: '#ffd700' },
];

async function createServer() {
  if (!config.token) {
    console.log('❌ No Discord token set!');
    console.log('To get a token:');
    console.log('1. Go to https://discord.com/developers');
    console.log('2. Create Application > Bot');
    console.log('3. Copy the token');
    console.log('4. Run: DISCORD_TOKEN=your_token node discord-bot.js');
    return;
  }

  const client = new Client({
    intents: [
      GatewayIntentBits.Guilds,
      GatewayIntentBits.GuildMessages,
    ]
  });

  client.once('ready', async () => {
    console.log(`🤖 Logged in as ${client.user.tag}`);

    try {
      // Create the server (guild)
      const guild = await client.guilds.create({
        name: config.serverName,
        icon: null,
        description: 'Master OpenClaw - Step by step courses',
        systemChannelFlags: 0,
      });

      console.log(`✅ Created server: ${guild.name}`);

      // Create text channels
      for (const channel of channels) {
        await guild.channels.create({
          name: channel.name,
          type: channel.type,
          topic: channel.description,
        });
        console.log(`📝 Created channel: ${channel.name}`);
      }

      // Create roles
      for (const role of roles) {
        await guild.roles.create({
          name: role.name,
          color: role.color,
        });
        console.log(`🎭 Created role: ${role.name}`);
      }

      console.log('\n🎉 Discord server created successfully!');
      console.log(`Server ID: ${guild.id}`);

      process.exit(0);
    } catch (error) {
      console.error('❌ Error:', error.message);
      process.exit(1);
    }
  });

  client.login(config.token);
}

createServer();
