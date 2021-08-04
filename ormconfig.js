module.exports = {
    type: 'postgres',
    host: '172.18.0.3',
    port: 5432,
    username: 'postgres',
    password: 'admin',
    database: 'iluvcoffes',
    entities: ['dist/**/*.entity.js'],
    migrations: ['dist/migrations/*.js'],
    cli: {
        migrationsDir: 'src/migrations',
    },
};