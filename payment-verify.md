# Payment & Verification System

## Simple Setup (No Code)

### Option 1: Google Forms + Discord Role Bot

1. **Create Google Form** (for course purchaseers)
   - Fields: Name, Email, Discord Username, Receipt Screenshot
   - Responses go to your email

2. **Add a Discord Bot** (MEE6 or Carl-bot)
   - Set up reaction roles
   - User reacts to message in #verify
   - Gets Student role automatically

---

### Option 2: Gumroad (Easiest!)

Gumroad handles payments AND delivers content:

1. Go to gumroad.com
2. Create product "Claw Academy Course"
3. Upload course files (PDFs, videos, etc.)
4. Set price: $67
5. Get shareable link

**In Discord:**
- Create #verify channel
- Message: "Bought the course? Drop your Gumroad email here!"
- You manually add role

---

### Option 3: Stripe (More Work)

1. Create Stripe account
2. Create product "Claw Academy"
3. Get checkout link
4. Use Stripe Discord bot or manual verification

---

## Recommended: Gumroad Flow

```
1. Customer buys on Gumroad
2. Gumroad emails them course files
3. Customer joins Discord with receipt
4. You add Student role
5. They access #lesson-1 through #lesson-6
```

**Super simple, zero automation needed!**

---

## Prices to Set

| Product | Price | Platform |
|---------|-------|----------|
| Course | $67 | Gumroad |
| Mastermind | $197/mo | Stripe or PayPal |
| 1-on-1 Setup | $99 | Stripe or PayPal |

---

## Next Steps

1. ✅ Create Discord server (manual)
2. ⬜ Set up Gumroad product ($67 course)
3. ⬜ Add Gumroad link to landing page
4. ⬜ Announce launch!

---

* Gumroad is free to start, takes 5 minutes to set up
* They take 10% but so worth it for simplicity
