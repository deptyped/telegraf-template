import LocalSession from "telegraf-session-local";

declare module "telegraf" {
  interface Context {
    session: Record<string, any>;
  }
}

export default () =>
  new LocalSession({ database: "sessions.json" }).middleware();
