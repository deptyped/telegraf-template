import "module-alias/register";

import config from "@bot/config";
import logger from "@bot/logger";
import bot from "@bot/bot";

process.once("SIGINT", () => bot.stop("SIGINT"));
process.once("SIGTERM", () => bot.stop("SIGTERM"));
process.on("uncaughtException", (error) => logger.error(error));

async function main() {
  if (config.isDevelopment || config.isTest) {
    await bot.launch();
  } else if (config.isProduction) {
    logger.info({
      msg: "setting webhook",
      url: `${config.BOT_WEBHOOK_URL}${config.BOT_WEBHOOK_PATH}`,
    });
    await bot.launch({
      webhook: {
        domain: config.BOT_WEBHOOK_URL,
        hookPath: config.BOT_WEBHOOK_PATH,
        port: config.BOT_PORT,
        host: config.BOT_HOST,
      },
    });
  }

  logger.info({
    msg: "bot started",
    username: bot.botInfo.username,
  });
}
main();
