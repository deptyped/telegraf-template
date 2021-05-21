import { Context } from "telegraf";

export default async (ctx: Context) => {
  await ctx.reply(`Hello from @${ctx.botInfo.username}`);
};
