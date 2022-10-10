const yaml = require("js-yaml");
const fs = require("fs");


class EnvConfig {
    dir;
    data;
    path;

    constructor(dir) {
        this.dir = dir
        this.loadConfig()
    }

    loadConfig() {
        let files = fs.readdirSync(this.dir);
        let env_config = {}
        let env_check = process.env.ENV_CONFIG
        let env_config_prefix = 'env'

        if (env_check != null || env_check === '') {
            env_config_prefix = env_config_prefix + '-' + env_check
        }

        let foundFiles = []


        for (const filesKey in files) {
            switch (files[filesKey]) {
                case env_config_prefix + '.yaml':
                case env_config_prefix + '.yml':
                case env_config_prefix + '.json':
                    foundFiles.push(files[filesKey])
                    break
            }

        }

        if (foundFiles.length === 0) {
            throw 'env file not found. searching for: ' + env_config_prefix + '.[yaml|yml|json]'
        } else if (foundFiles.length > 1) {
            throw 'multiple files found:\n' + JSON.stringify(foundFiles)
        } else {
            switch (foundFiles[0].split('.').pop()) {
                case 'yaml':
                    env_config = yaml.load(fs.readFileSync(this.dir + '/' + foundFiles[0], 'utf8'))
                    this.data = env_config
                    this.path = this.dir + '/' + foundFiles[0]
                    break
                case 'json':
                    env_config = JSON.parse(fs.readFileSync(this.dir + '/' + foundFiles[0], 'utf8'))
                    this.data = env_config
                    this.path = this.dir + '/' + foundFiles[0]
                    break
            }
        }
    }
}


exports.EnvConfig = EnvConfig


