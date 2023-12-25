export { default } from "next-auth/middleware";

export const config = { matcher: ["/profile", "/protected/:path*"] }; // Набор приватных роутов
// "/protected/:path*"]  - динамические роуты
