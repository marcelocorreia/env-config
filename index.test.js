const {env_config,env_config_name} = require('./index')

test('get config name', async () => {
    expect(env_config_name).not.toBeNull()

})

test('get config', async () => {
    expect(env_config.test_string).toBe('my test string')
})