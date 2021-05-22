# telegraf-template - bot starter boilerplate project
[![telegraf-template.png](https://i.postimg.cc/pVjg3p92/telegraf-template.png)](https://postimg.cc/Z0T7dYFg)

## Features

- Config loading and validation (powered by [zod](https://www.npmjs.com/package/zod))
- Logger (powered by [pino](https://www.npmjs.com/package/pino))
- Internationalization and language selection (powered by [@edjopato/telegraf-i18n](https://www.npmjs.com/package/@edjopato/telegraf-i18n))
- Callback data management library (powered by [telegraf-callback-data](https://www.npmjs.com/package/telegraf-callback-data))
- Sessions (powered by [telegraf-session-local](https://www.npmjs.com/package/telegraf-session-local))

## How to use

1. Clone this repo or generate new repo via [link](https://github.com/deptyped/telegraf-template/generate)  
```bash
git clone https://github.com/deptyped/telegraf-template
```
2. Rename `.env.example` to `.env` and set your `BOT_TOKEN`
```bash
mv .env.example .env
```
3. Install dependencies
```bash
npm install
```
4. Run watch mode
```bash
npm run start:dev
```
