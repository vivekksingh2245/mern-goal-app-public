module.exports = {
  apps: [{
    name: 'my-app',
    script: 'server.js', // Replace with the path to your main application file
    env: {
      NODE_ENV: 'development',
      // other development environment variables
    },
    env_production: {
      NODE_ENV: 'production',
      PORT: 5000,
      MONGO_URI: 'mongodb+srv://bardaiuse:Poweruser%40123@cluster0.1ri9oal.mongodb.net/',
      JWT_SECRET: 'abc123',
      // other production environment variables
    }
  }]
};

