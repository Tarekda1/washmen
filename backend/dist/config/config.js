"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const config = {
    development: {
        database: process.env.DB_NAME,
        dialect: process.env.DB_DIALECT,
        host: process.env.DB_HOST,
        password: process.env.DB_PASS,
        port: process.env.DB_PORT,
        username: process.env.DB_USER,
        secret: process.env.SECRET,
        serverPort: process.env.PORT,
        imgPort: process.env.IMAGE_REDIRECT_PORT,
    },
    production: {
        database: process.env.DB_NAME,
        dialect: process.env.DB_DIALECT,
        host: process.env.DB_HOST,
        password: process.env.DB_PASS,
        port: process.env.DB_PORT,
        username: process.env.DB_USER,
        secret: process.env.SECRET,
        serverPort: process.env.PORT,
        imgPort: process.env.IMAGE_REDIRECT_PORT,
    },
    test: {
        database: process.env.DB_NAME,
        dialect: process.env.DB_DIALECT,
        host: process.env.DB_HOST,
        password: process.env.DB_PASS,
        port: process.env.DB_PORT,
        username: process.env.DB_USER,
        secret: process.env.SECRET,
        serverPort: process.env.PORT,
        imgPort: process.env.IMAGE_REDIRECT_PORT,
    },
};
exports.default = config;
//# sourceMappingURL=config.js.map