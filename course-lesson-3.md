# Lesson 3: Connecting Your First Apps

## Overview

In this lesson, we'll connect OpenClaw to Telegram - your first integration!

---

## Why Telegram?

- Free
- Easy to set up
- Works on mobile & desktop
- Great bot API

---

## Step 1: Create a Telegram Bot

1. Open Telegram
2. Search for @BotFather
3. Send `/newbot`
4. Follow the prompts
5. Copy your **API Token**

---

## Step 2: Configure OpenClaw

Open your OpenClaw config file:

```yaml
telegram:
  enabled: true
  bot_token: "YOUR_TOKEN_HERE"
  allowed_users:
    - your_username
```

Restart OpenClaw:
```bash
# Press Ctrl+C to stop
npm start
```

---

## Step 3: Test It!

1. Open Telegram
2. Find your bot (search the name you gave it)
3. Send `/start`
4. You should get a welcome message!

---

## Troubleshooting

### "Invalid token"
- Double-check you copied correctly
- Make sure no spaces in the token

### "Not authorized"
- Add your username to `allowed_users` in config

### "Connection refused"
- Make sure OpenClaw is running
- Check the port (default: 3000)

---

## What's Next?

In Lesson 4, we'll cover:
- Voice & audio setup
- Text-to-speech commands
- Audio notifications

---

*Lesson 3 complete! Your first integration is working!*
