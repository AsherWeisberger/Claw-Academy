// Reddit Auto-Poster - Ready to use
// To use: npm install snoowrap

const snoowrap = require('snoowrap');

const r = new snoowrap({
  userAgent: 'ClawAcademy/1.0',
  clientId: process.env.REDDIT_CLIENT_ID,
  clientSecret: process.env.REDDIT_CLIENT_SECRET,
  username: process.env.REDDIT_USERNAME,
  password: process.env.REDDIT_PASSWORD
});

const posts = [
  {
    subreddit: 'selfhosted',
    title: 'I built a course teaching people to self-host their own AI assistant',
    text: `Hey everyone!

I've been running OpenClaw (self-hosted AI assistant) for a while now and it's been incredible. Privacy-first, no monthly fees, fully customizable.

I decided to create a course to help others do the same. 6 lessons from zero to running your own AI.

Would love feedback from this community!

Check it out: https://asherweisberger.github.io/Claw-Academy/

Happy to answer any questions!`
  },
  {
    subreddit: 'homeassistant',
    title: 'Voice-controlled everything with self-hosted AI',
    body: `Hey everyone!

I set up OpenClaw to control my smart home with voice commands.

Now I just message my AI and it:
- Turns lights on/off
- Sets thermostat
- Checks security cameras
- Arms the alarm

All locally. No cloud dependencies.

Wrote a course on it: https://asherweisberger.github.io/Claw-Academy/

Would love to hear what you all think!`
  },
  {
    subreddit: 'artificial',
    title: 'Self-hosted AI - the future or fad?',
    body: `Been thinking about this a lot...

Most people pay $20+/month for AI like ChatGPT.

But you can self-host with OpenClaw. Runs locally. No data leaves your machine. No subscriptions.

Created a course teaching people how: https://asherweisberger.github.io/Claw-Academy/

What do you think - is self-hosted AI the future?`
  }
];

async function postToReddit() {
  for (const post of posts) {
    try {
      const submission = await r.getSubreddit(post.subreddit).submitSelfpost({
        title: post.title,
        text: post.text || post.body
      });
      console.log(`✅ Posted to r/${post.subreddit}`);
      console.log(`   URL: ${submission.url}`);
      
      // Wait between posts to avoid rate limits
      await new Promise(r => setTimeout(r, 10000));
    } catch (error) {
      console.log(`❌ Error posting to r/${post.subreddit}:`, error.message);
    }
  }
}

postToReddit();
