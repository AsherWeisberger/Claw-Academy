# OpenClaw Quick-Start Guide

## Get Running in 10 Minutes

---

## What is OpenClaw?

OpenClaw is your personal AI assistant that runs locally on your computer. No monthly fees. Your data stays yours.

**Benefits:**
- No subscription costs
- Complete privacy
- Fully customizable
- 24/7 availability

---

## Step 1: Check Your Machine

You need:
- Mac, Linux, or Windows
- 4GB+ RAM (8GB recommended)
- Terminal/Command Line access
- Git installed

---

## Step 2: Install Node.js

**Mac/Linux:**
```bash
# Install Homebrew
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"

# Install Node.js
brew install node
```

**Check it worked:**
```bash
node --version
```

---

## Step 3: Install OpenClaw

```bash
# Clone the repository
git clone https://github.com/openclaw/openclaw.git

# Go into the directory
cd openclaw

# Install dependencies
npm install

# Start the setup wizard
npm start
```

---

## Step 4: Configure Telegram (Recommended)

1. Open Telegram
2. Search for @BotFather
3. Send `/newbot`
4. Follow the prompts to name your bot
5. Copy your API Token
6. Add to OpenClaw config when prompted
7. Restart: `Ctrl+C` then `npm start`

---

## Step 5: Say Hello!

Send a message to your Telegram bot. It should reply!

---

## Pro Tips

1. **Run on a Raspberry Pi** - Cheap home server ($35)
2. **Use PM2** to keep it running after terminal closes
   ```bash
   npm install -g pm2
   pm2 start npm -- start
   pm2 save
   ```
3. **Connect to Discord** for community features
4. **Set up voice** with ElevenLabs for premium TTS

---

## Troubleshooting

### "npm not found"
- Restart your terminal
- Or: `source ~/.bashrc` or `source ~/.zshrc`

### "Port 3000 in use"
- Find what's using it: `lsof -i :3000`
- Or change port in config

### "Permission denied"
- Don't use sudo
- Fix npm: `npm config set prefix ~/.npm-global`

---

## What's Next?

- **Join Discord** - Get help from community
- **Take the Course** - Full 6-lesson program
- **Explore Integrations** - Connect more apps

---

## Resources

- Docs: docs.openclaw.ai
- GitHub: github.com/openclaw/openclaw
- Discord: Join via course

---

© 2026 Claw Academy
Learn OpenClaw the easy way
