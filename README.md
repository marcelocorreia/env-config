# env-config

# TLDR;

- Nodejs library for ingesting config files
- suports yaml and json formats
- by default will look for files names as `env-${ENV_CONFIG}.[yaml|yml|json]`. I.e.: `env-test.yaml`
  , `env-production.json`
    - if ENV_CONFIG env var is not set than will look for `env.[yaml|yml|json]`. I.e: `env.yaml`,`env.json`
