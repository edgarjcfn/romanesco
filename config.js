var configs = {};

configs.mongodb_url = process.env.MONGODB_DB_URL || "mongodb://localhost/romanesco";

module.exports = configs;
