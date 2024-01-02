import { defineConfig } from 'astro/config';
import icon from "astro-icon";

// https://astro.build/config
export default defineConfig({
    integrations: [icon()],
    i18n: {
        defaultLocale: "zh-cn",
        locales: ["zh-cn", "en"],
        routing: {
            prefixDefaultLocale: false
        }
    }
});
