import { Telegraf } from "telegraf";

import config from "@bot/config";

import setupLoggerMiddleware from "@bot/middlewares/setup-logger.middleware";
import setupSessionMiddleware from "@bot/middlewares/setup-session.middleware";
import debugLoggerMiddleware from "@bot/middlewares/debug-logger.middleware";

import startCommandHandler from "@bot/handlers/start-command.handler";

const bot = new Telegraf(config.BOT_TOKEN, {
  telegram: {
    apiRoot: config.BOT_API_ROOT,
  },
});

bot.use(setupLoggerMiddleware());
bot.use(setupSessionMiddleware());
bot.use(debugLoggerMiddleware());

bot.start(startCommandHandler);

export default bot;
