import type { AstroI18nextConfig } from "astro-i18next";

const config: AstroI18nextConfig = {
  defaultLocale: "ja",
  locales: ["ja", "en"],
  load: ["server", "client"],
  i18nextServer: {
    debug: true,
  },
  i18nextClient: {
    debug: true,
  },
};

export default config;
