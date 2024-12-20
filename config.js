require('dotenv').config()

module.exports = {
    mysql_database: {
        host: process.env.MYSQL_HOST,
        db: process.env.MYSQL_DB,
        user: process.env.MYSQL_USER,
        pass: process.env.MYSQL_PASS,
    },
    mongodb: {
        host: process.env.MONGO_HOST,
        db: process.env.MONGO_DB,
        user: process.env.MONGO_USER,
        pass: process.env.MONGO_PASS,
        port: process.env.MONGO_PORT
    }
}