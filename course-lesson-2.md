# Lesson 2: Prerequisites & Installation

## What You Need Before We Start

Before installing OpenClaw, let's make sure your machine is ready.

---

## System Requirements

### For Mac Users
- macOS 12 (Monterey) or later
- At least 4GB of RAM (8GB recommended)
- Homebrew installed
- Terminal knowledge (basic)

### For Linux Users
- Ubuntu 20.04+ or similar
- At least 4GB RAM
- Basic terminal skills
- Node.js 18+

### For Windows Users
- Windows 10/11
- WSL2 (Windows Subsystem for Linux) recommended
- Or use Docker

---

## Step 1: Install Node.js

Open your terminal and run:

```bash
# Check if you have Node.js
node --version

# If not installed, install Homebrew first
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"

# Then install Node.js
brew install node
```

---

## Step 2: Install OpenClaw

```bash
# Clone the repository
git clone https://github.com/openclaw/openclaw.git

# Go into the directory
cd openclaw

# Install dependencies
npm install

# Start the setup
npm start
```

---

## Step 3: Initial Configuration

After running `npm start`, you'll see:

1. **Welcome screen** - Press Enter to continue
2. **Gateway setup** - Choose "local" for now
3. **Model selection** - We'll use the default
4. **First agent** - Name your first agent!

---

## Troubleshooting

### "Command not found: npm"
- Make sure Node.js installed correctly
- Try: `source ~/.zshrc` or restart terminal

### "Port already in use"
- Something else is using port 3000
- We'll cover ports in Lesson 3

### "Permission denied"
- Try: `sudo npm install` (not recommended)
- Better: Fix your npm prefix

---

## What's Next?

In Lesson 3, we'll configure:
- Telegram bot connection
- Basic settings
- Your first test message

---

*Lesson 2 complete! You're ready for the basics.*
