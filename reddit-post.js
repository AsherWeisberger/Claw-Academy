// Reddit Poster - Schedule & Post
// Note: Requires Reddit API credentials

const snoowrap = require('snoowrap');

const config = {
  clientId: process.env.REDDIT_CLIENT_ID,
  clientSecret: process.env.REDDIT_CLIENT_SECRET,
  username: process.env.REDDIT_USERNAME,
  password: process.env.REDDIT_PASSWORD,
  userAgent: 'ClawAcademy/1.0'
};

const post = {
  subreddit: 'selfhosted',
  title: 'I built a course teaching people to self-host their own AI assistant',
  text: `Hey everyone!

I've been running OpenClaw (self-hosted AI assistant) for a while now and it's been incredible. Privacy-first, no monthly fees, fully customizable.

I decided to create a course to help others do the same. 6 lessons from zero to running your own AI:

✓ Installing OpenClaw (10 minutes)
✓ Connecting Telegram/Discord
✓ Voice & audio setup
✓ Automation basics
✓ Building custom agents

Would love feedback from this community since you're the experts on self-hosting!

Check it out: https://asherweisberger.github.io/Claw-Academy/

Happy to answer any questions!`
};

async function postToReddit() {
  if (!config.clientId) {
    console.log('❌ No Reddit credentials!');
    console.log('To post to Reddit:');
    console.log('1. Go to https://www.reddit.com/prefs/apps');
    console.log('2. Create script > get credentials');
    console.log('3. Set environment variables');
    console.log('4. Run: node reddit-post.js');
    return;
  }

  const r = await snoowrap.fromEnv({
    userAgent: config.userAgent
  });

  const submission = await r.getSubreddit(post.subreddit).submitSelfpost({
    title: post.title,
    text: post.text
  });

  console.log('✅ Posted to Reddit!');
  console.log('URL:', submission.url);
}

postToReddit();
