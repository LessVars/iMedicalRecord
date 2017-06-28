const path = require('path')

const configTypes = {
    Development: "Development",
    Testing: "Testing",
    Production: "Production"
}

exports.configTypes = configTypes

function Config(configType) {
    this.APP_NAME = 'i Medical Record'
    this.APP_ADMIN = 'hexcola@gmail.com'
    this.SECRET_KEY = '' || 'hard to guess'
    this.HASH_ALGORITHM = '' || 'sha1'
    this.PATH = {
        ROOT: path.resolve(__dirname),
        PUBLIC: path.join(__dirname, 'public'),
        MODELS: path.join(__dirname, 'models'),
        VIEWS: path.join(__dirname, 'views'),
        CONTROLLERS: path.join(__dirname, 'controllers')
    }

    switch(configType){

        case configTypes.Testing:
            this.DB = {
                URI: 'mongodb://localhost:32769/imr_test',
                OPTIONS: { server: { poolSize: 5 }}
            }
        case configTypes.Production:
            this.DB = {
                URI: 'mongodb://localhost:32769/imr',
                OPTIONS: { server: { poolSize: 5 }}
            }
            break
        default: // default is development state
            this.DB = {
                URI: 'mongodb://localhost:32769/imr_dev',
                OPTIONS: { server: { poolSize: 5 }}
            }
    }
}

exports.Config = new Config(configTypes.Development)