require("dotenv").config();
const { App } = require("@slack/bolt");

const app = new App({
  token: process.env.SLACK_BOT_TOKEN,
  socketMode: true,
  appToken: process.env.SLACK_APP_TOKEN,
  signingSecret: process.env.SLACK_APP_SIGNING_SECRET,
});

app.message("knock knock", async ({ message, say }) => {
  console.log("entro??");
  await say(`_Who's there?_`);
});

(async () => {
  console.log("started");
  await app.start(3000);
})();
