# Lesson 5: Automation Basics

## Overview

Now the fun begins! Let's automate your life with OpenClaw.

---

## What Can You Automate?

- 📅 Calendar management
- 📧 Email handling
- 🏠 Smart home
- 🔔 Notifications
- 📝 Note-taking

---

## Calendar Integration

### Google Calendar

```yaml
google:
  enabled: true
  credentials_file: "./credentials.json"
  calendar_id: "your_email@gmail.com"
```

### Create a Simple Event

```yaml
automations:
  - trigger: "schedule meeting"
    action: 
      type: "calendar"
      event:
        title: "Team Standup"
        duration: 30
        attendees: ["team@company.com"]
```

---

## Email Automation

```yaml
email:
  enabled: true
  smtp:
    host: "smtp.gmail.com"
    port: 587
    user: "your_email@gmail.com"
    pass: "app_password"
```

### Auto-Respond

```yaml
automations:
  - trigger: "urgent"
    action:
      type: "email"
      to: "boss@company.com"
      subject: "On it!"
      body: "I'm on it right now."
```

---

## Notifications

```yaml
notifications:
  - name: "daily-summary"
    schedule: "0 9 * * *"  # 9 AM daily
    message: "Good morning! You have 3 meetings today."
    speak: true
```

---

## Real-World Example

**Morning Routine Automation:**
```
6:00 AM → Read weather forecast (speak)
6:05 AM → Read calendar for today (speak)
6:10 AM → Turn on kitchen lights (smart home)
6:15 AM → Start coffee maker (smart home)
```

---

## Coming Up

**Lesson 6: Custom Agents**
- Build agents for specific tasks
- Personal AI team members
- Specialized workflows

---

*You're automating! 🚀*
