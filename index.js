require("dotenv").config();
const { Telegraf } = require("telegraf");
const { start, pricelist, promo } = require("./content");

console.log(pricelist);

const bot = new Telegraf(process.env.TELEGRAM_BOT_TOKEN);

bot.command("start", (ctx) => {
  ctx.reply(start, { parse_mode: "Markdown" });
});

bot.command("pl", (ctx) => {
  ctx.reply(pricelist, { parse_mode: "Markdown" });
});

bot.command("promo", (ctx) => {
  ctx.reply(promo, { parse_mode: "Markdown" });
});

// Start the bot
bot.launch();
console.log("Telegram bot is running...");

// Graceful stop handling
process.once("SIGINT", () => bot.stop("SIGINT"));
process.once("SIGTERM", () => bot.stop("SIGTERM"));
