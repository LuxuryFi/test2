module.exports = {
    port: process.env.PORT,
    mysqlSettings: {
        database: process.env.DB_DATABASE,
        user: process.env.DB_USERNAME || 'root',
        password: process.env.DB_PASSWORD || '',
        host: process.env.DB_HOST || '127.0.0.1',
        port: process.env.DB_PORT || 3306
    },
    rabbitMqSettings: {
        consumerUri: process.env.CONSUMER_MQ_SERVER_URI || 'amqp://localhost',
        producerUri: process.env.PRODUCER_MQ_SERVER_URI || 'amqp://localhost',
    },
}