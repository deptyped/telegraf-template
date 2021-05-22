import { Context, Markup, deunionize } from "telegraf";
import { CallbackData } from "telegraf-callback-data";
import ISO6391 from "iso-639-1";

export const languageMenuSelectData = new CallbackData<{
  code: string;
}>("select-language", ["code"]);

const getLanguageButton = (code, isActive = false) =>
  Markup.button.callback(
    `${isActive ? "✅ " : ""}${ISO6391.getNativeName(code)}`,
    languageMenuSelectData.create({ code })
  );

const getLanguagesKeyboard = (allowedLocales, currentLocale) =>
  Markup.inlineKeyboard(
    allowedLocales.map((code) => [
      getLanguageButton(code, currentLocale === code),
    ])
  );

export const languageCommandHandler = async (ctx: Context) => {
  await ctx.reply(ctx.i18n.t("language_select"), {
    ...getLanguagesKeyboard(
      Object.keys(ctx.i18n.repository),
      ctx.i18n.locale()
    ),
  });
};

export const languageMenuSelectHandler = async (ctx: Context) => {
  const { code } = languageMenuSelectData.parse(
    deunionize(ctx.callbackQuery).data
  );

  ctx.answerCbQuery();
  if (Object.keys(ctx.i18n.repository).includes(code)) {
    ctx.i18n.locale(code);

    await ctx.editMessageText(ctx.i18n.t("language_selected"), {
      ...getLanguagesKeyboard(
        Object.keys(ctx.i18n.repository),
        ctx.i18n.locale()
      ),
    });
  }
};
