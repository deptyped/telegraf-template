import updateLogger from "telegraf-update-logger";
import { Context } from "telegraf";
import config from "@bot/config";

export default (options?: updateLogger.Options) => (ctx: Context, next) => {
  ctx.logger.trace({
    msg: "update received",
    update: ctx.update,
  });
  updateLogger({
    log: (msg) =>
      ctx.logger.debug({
        msg,
      }),
    colors: config.isDevelopment,
    ...options,
  })(ctx, next);
};
