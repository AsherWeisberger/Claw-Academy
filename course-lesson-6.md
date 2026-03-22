# Lesson 6: Building Custom Agents

## Overview

Create specialized AI agents for different tasks. Think of it as building your own AI team.

---

## What is a Custom Agent?

A custom agent is OpenClaw configured for a specific purpose:
- 📝 Writing assistant
- 🧑‍💻 Code reviewer  
- 📊 Data analyst
- 🎨 Creative partner

---

## Creating Your First Agent

### Step 1: Define the Persona

```yaml
agents:
  writer:
    name: "Copywriter"
    personality: "You are a professional copywriter specializing in friendly, conversational marketing copy."
    expertise:
      - "Email marketing"
      - "Landing pages"
      - "Social media"
    tone: "friendly and professional"
```

### Step 2: Set Specific Instructions

```yaml
agents:
  writer:
    instructions: |
      When asked to write marketing copy:
      1. Keep it conversational
      2. Focus on benefits, not features
      3. Include a clear call-to-action
      4. Stay under 150 words for ads
```

---

## Example Agents to Build

### 1. Code Reviewer Agent
- Reviews your code for bugs
- Suggests improvements
- Explains complex logic

### 2. Meeting Notes Agent
- Transcribes meetings
- Creates summaries
- Action items

### 3. Research Assistant
- Searches the web
- Summarizes articles
- Creates reports

### 4. Personal Chef
- Finds recipes
- Adjusts for dietary restrictions
- Creates shopping lists

---

## Advanced: Agent-to-Agent Communication

```yaml
workflow:
  - agent: "researcher"
    task: "Find latest AI news"
  - agent: "writer"  
    task: "Write summary from research"
  - agent: "publisher"
    task: "Post to blog"
```

---

## Congratulations! 🎉

You've completed the Claw Academy core course!

**What's next?**
- Join our Mastermind for monthly calls
- Build more agents
- Share your creations in Discord

---

*Thank you for learning with Claw Academy! 🦶*
