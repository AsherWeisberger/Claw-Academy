#!/bin/bash
# Claw Academy - Push to Live Site

echo "🚀 Deploying Claw Academy..."

cd /Users/asherweisberger/.openclaw/workspace/claw-academy

# Add all changes
git add .

# Commit
git commit -m "Business setup complete - $(date)"

# Push to main
git push origin main

# Push to GitHub Pages
git push origin main:gh-pages

echo "✅ Deployed! Check: https://asherweisberger.github.io/Claw-Academy/"
