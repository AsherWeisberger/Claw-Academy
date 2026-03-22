# 🦶 Claw Academy Discord Setup

## Option 1: Quick Manual Setup (30 seconds)

1. Open Discord
2. Click **+** on left sidebar
3. Select **"Create My Own"**
4. Click **"For Me and My Friends"**
5. Name: **Claw Academy**
6. Click **Create**

**Done!** Now add channels manually:

### Create Channels (in order)
```
📚 COURSE
  ├── #start-here
  ├── #lesson-1
  ├── #lesson-2
  ├── #lesson-3
  ├── #lesson-4
  ├── #lesson-5
  └── #lesson-6

💬 COMMUNITY
  ├── #introductions
  ├── #general
  ├── #help
  └── #showcase

📢 ANNOUNCEMENTS
  └── #news

🔊 VOICE
  ├── Voice Lounge
  └── Study Room
```

### Create Roles
- **Student** (green) - Default for new members
- **Graduate** (gold) - Completed course

---

## Option 2: Automated (requires bot token)

1. Go to https://discord.com/developers
2. Create Application → Bot
3. Copy token
4. Run:
```bash
cd claw-academy
npm install discord.js
DISCORD_TOKEN=your_token node discord-bot.js
```

---

## Bot Features to Add Later

### MEE6 (Popular bot)
- Level system
- Welcome messages
- Auto-roles
- https://mee6.xyz/

### Carl-bot
- Reaction roles
- Moderation
- Logging
- https://carl.gg/

### Discord.js Bot (Custom)
- Full control
- Course delivery
- Payment verification

---

## Welcome Message

Copy and paste into #general:

```
👋 Welcome to Claw Academy!

We're thrilled you're here. This is your place to master OpenClaw.

📚 Start with #start-here
💬 Chat in #general  
❓ Questions in #help
🎉 Share your builds in #showcase

Remember: There are no dumb questions. We're all learning!

- The Claw Academy Team 🦶
```

---

## Verification Setup (for paid course)

Create a channel `#verify` and use a bot to give roles after payment.

Or use a simple form:
1. User sends receipt to #verify
2. Admin manually adds Student role

---

*Quickest way: Just create manually in 30 seconds! 🚀*
