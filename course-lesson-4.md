# Lesson 4: Voice & Audio Setup

## Overview

Let's make OpenClaw speak! In this lesson, we'll set up text-to-speech (TTS) and voice commands.

---

## Why Voice?

- Hands-free control
- Bedtime stories for kids
- Announcements in your home
- Accessibility

---

## Step 1: Install Audio Dependencies

```bash
# macOS
brew install ffmpeg

# Linux
sudo apt install ffmpeg
```

---

## Step 2: Configure TTS

Open your config and add:

```yaml
tts:
  enabled: true
  engine: "say"  # macOS default
  # Or use ElevenLabs for premium voice
  # elevenlabs:
  #   api_key: "your_key"
  #   voice_id: "Rachel"
```

---

## Step 3: Test It

Add a command that speaks:

```yaml
commands:
  - name: "speak"
    response: "Hello! I can now talk to you!"
    speak: true
```

---

## Voice Commands

You can also use speech-to-text:

```yaml
stt:
  engine: "whisper"  # Local, free
  # Or use OpenAI
  # openai:
  #   api_key: "your_key"
```

---

## Fun Ideas

1. 🎙️ Morning briefing - weather + calendar
2. 📖 Bedtime stories - TTS reading
3. 🔔 Home announcements - doorbell alerts
4. 🤖 Voice reminders - "Remind me to..."

---

## Coming Up Next

**Lesson 5: Automation Basics**
- Connect to calendars
- Email automation
- Smart home integration

---

*Talk soon! 🗣️*
