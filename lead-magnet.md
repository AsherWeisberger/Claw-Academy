# FREE: OpenClaw Quick-Start Guide

## Download this PDF and get started in 10 minutes!

---

### What is OpenClaw?

OpenClaw is your personal AI assistant that runs locally on your computer. No monthly fees. Your data stays yours.

**Benefits:**
- No subscription costs
- Complete privacy
- Fully customizable
- 24/7 availability

---

### Step 1: Check Your Machine

You need:
- Mac, Linux, or Windows (with WSL)
- 4GB+ RAM (8GB recommended)
- Terminal/Command Line access

---

### Step 2: Install Node.js

**Mac:**
```bash
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
brew install node
```

**Linux:**
```bash
sudo apt install nodejs npm
```

**Check it:**
```bash
node --version
```

---

### Step 3: Install OpenClaw

```bash
# Clone the repo
git clone https://github.com/openclaw/openclaw.git

# Go to directory
cd openclaw

# Install
npm install

# Start
npm start
```

---

### Step 4: Connect Telegram

1. Open Telegram
2. Search @BotFather
3. Send `/newbot`
4. Follow prompts, copy token
5. Enter token when prompted
6. Restart with `npm start`

---

### Step 5: Say Hello!

Message your bot. It should reply!

---

### Pro Tips

1. **Run on Raspberry Pi** - $35 home server
2. **Use PM2** to keep running:
   ```bash
   npm install -g pm2
   pm2 start npm -- start
   pm2 save
   ```
3. **Connect Discord** for more features
4. **Set up voice** with ElevenLabs

---

### Troubleshooting

**"npm not found"**
- Restart terminal
- Or: `source ~/.bashrc`

**"Port 3000 in use"**
- Find: `lsof -i :3000`
- Or change port in config

**"Permission denied"**
- Don't use sudo
- Fix: `npm config set prefix ~/.npm-global`

---

### What's Next?

**Join Claw Academy for the full course:**
- 6 detailed lessons
- Step-by-step scripts
- Voice & automation
- Custom agents
- Community support

Get the course: [LINK]

---

© 2026 Claw Academy
