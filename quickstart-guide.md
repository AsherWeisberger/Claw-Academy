# OpenClaw Quick-Start Guide
## Get Running in 10 Minutes

---

## What is OpenClaw?

OpenClaw is your personal AI assistant that runs locally on your computer. No monthly fees. Your data stays yours.

---

## Step 1: Check Your Machine

You need:
- Mac, Linux, or Windows
- 4GB+ RAM
- Terminal/Command Line access

---

## Step 2: Install Node.js

**Mac/Linux:**
```bash
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
brew install node
```

**Check it worked:**
```bash
node --version
```

---

## Step 3: Install OpenClaw

```bash
git clone https://github.com/openclaw/openclaw.git
cd openclaw
npm install
npm start
```

---

## Step 4: Connect Telegram

1. Message @BotFather on Telegram
2. Create new bot: `/newbot`
3. Copy your API token
4. Add to OpenClaw config
5. Restart

---

## Step 5: Say Hello!

Send a message to your bot. It should reply!

---

## Pro Tips

1. **Always run on a Raspberry Pi** - cheap home server
2. **Use PM2** to keep it running after terminal closes
3. **Connect to Discord** for community features
4. **Set up voice** with ElevenLabs for TTS

---

## What's Next?

- Join Claw Academy for full courses
- Check the docs: docs.openclaw.ai
- Join the Discord community

---

*© Claw Academy - Learn OpenClaw the easy way*
