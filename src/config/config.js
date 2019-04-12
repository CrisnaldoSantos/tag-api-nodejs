module.exports = {
    development: {
      database: {
        host: "localhost",
        port: 5432,
        name: "tag-api",
        dialect: "postgres",
        user: "postgres",
        password: "toor"
      }
    },
    production: {
      database: {
        host: process.env.DB_HOST,
        port: process.env.DB_PORT
      }
    }
  };
  