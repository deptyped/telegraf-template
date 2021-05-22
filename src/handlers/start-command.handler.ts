import { Context } from "telegraf";

export const startCommandHandler = async (ctx: Context) => {
  await ctx.reply(
    ctx.i18n.t("start", {
      username: ctx.botInfo.username,
    })
  );
};
