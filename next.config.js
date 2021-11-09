const nextTranslate = require("next-translate");

module.exports = {
    reactStrictMode: true,
    swcMinify: true,
    ...nextTranslate(),
    images: {
        formats: ["image/avif", "image/webp"]
        // domains: ["localhost"],
    },
    env: {
        build: new Date()
    }
};
