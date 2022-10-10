const yaml = require("js-yaml");
const fs = require("fs");

let files = fs.readdirSync(__dirname);
let env_config = {}
let env_check = process.env.NODE_ENV
let env_config_prefix = 'env'
if(env_check!=null){
    env_config_prefix = env_config_prefix+'-'+env_check
}


let foundFiles = []
console.log(process.env.NODE_ENV)
console.log(env_config_prefix)


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
    throw 'env file not found. searching for: '+ env_config_prefix+'.[yaml|yml|json]'
} else if (foundFiles.length > 1) {
    throw 'multiple files found:\n' + JSON.stringify(foundFiles)
} else {
    switch (foundFiles[0].split('.').pop()) {
        case 'yaml':
            env_config = yaml.load(fs.readFileSync(__dirname + '/' + foundFiles[0], 'utf8'))
            break
        case 'json':
            env_config = JSON.parse(fs.readFileSync(__dirname + '/' + foundFiles[0], 'utf8'))
            break
    }
}


exports.env_config = env_config
// exports.cu = process.env.NODE_ENV
exports.env_config_name = env_config_prefix

