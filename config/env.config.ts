import * as dotenv from 'dotenv';
import { join } from 'path';
dotenv.config({path: join(__dirname, '..','.env')});

export const env = {
    PORT:parseInt(process.env.PORT || '3000', 10),

    SQL_HOST: process.env.SQL_HOST,
    SQL_PORT: parseInt(process.env.SQL_PORT || '5432', 10),
    SQL_USER: process.env.SQL_USER,
    SQL_PASSWORD: process.env.SQL_PASSWORD,
    SQL_DATABASE: process.env.SQL_DATABASE,

    NON_SQL_DATABASE: process.env.NON_SQL_DATABASE,

    JWT_SECRET: process.env.JWT_SECRET,
    JWT_EXPIRES_IN: process.env.JWT_EXPIRES_IN
}