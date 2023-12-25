This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
ЗАПУСК приложения `npm run dev`
# or
yarn dev
# or
pnpm dev
```

1. сперва создаём папку `next-blog-app`
2. В ней создаём `npx create-next-app@13.4 .`
3. Вы можете обновить, запустив: `npm i -g create-next-app`
4. В `package.js` в скрипте "dev" включаем ключик `--turbo`
5. В `next.config.js` устанавливаем следующий конфиг
   /\*_ @type {import('next').NextConfig} _/
   const nextConfig = {
   experimental: {
   appDir: true,
   },
   }

6. `npm i zustand` стэйт менеджер - аналог редакса
7. `npm i swr`
8. Смотрим библиотеку `https://authjs.dev/`
9. `npm i next-auth`
10. `npm i next-auth@4.22.1` будем работать с этой версией
11. В `package.js` меняем `"dev": "next dev --turbo"`, на `"dev": "next dev"`, убираем ` --turbo`.
12. `https://cloud.google.com/`
