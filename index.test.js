const {EnvConfig} = require('./index')

test('get config :: no env', async () => {
    const cfg = new EnvConfig(".")
    console.log(cfg)
    expect(cfg.data).not.toBeNull()

})

test('get config :: dev env', async () => {
    process.env.ENV_CONFIG = 'dev'
    const cfg = new EnvConfig(".")
    console.log(cfg)
    expect(cfg.data).not.toBeNull()

})


test('get config :: test env', async () => {
    process.env.ENV_CONFIG = 'test'
    const cfg = new EnvConfig(".")
    console.log(cfg)
    expect(cfg.data).not.toBeNull()

})


