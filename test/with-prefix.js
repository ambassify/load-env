const assert = require('assert');
const withPrefix = require('../with-prefix');

describe('load_env/with-prefix', () => {

    const originalEnv = process.env;


    beforeEach(() => {
        process.env = Object.assign({}, process.env);
    });

    afterEach(() => {
        process.env = originalEnv;
    });

    it('Should return prefixed environment variables', () => {
        process.env['my_prefix__VARIABLE'] = 'test-value';

        const load_env = withPrefix('my_prefix__');

        assert.equal(load_env('VARIABLE'), 'test-value');
    });

    it('Should return non-prefixed environment variables', () => {
        process.env['VARIABLE'] = 'non-prefixed test-value';

        const load_env = withPrefix('my_prefix__');

        assert.equal(load_env('VARIABLE'), 'non-prefixed test-value');
    });

    it('Should prefer returning prefixed environment variables', () => {
        process.env['my_prefix__VARIABLE'] = 'test-value';
        process.env['VARIABLE'] = 'non-prefixed test-value';

        const load_env = withPrefix('my_prefix__');

        assert.equal(load_env('VARIABLE'), 'test-value');
    });

    it('Should throw on missing variables', () => {
        const load_env = withPrefix('my_prefix__');

        assert.throws(function() {
            load_env('VARIABLE');
        });
    });

    it('Should return default value if set', () => {
        const load_env = withPrefix('my_prefix__');

        assert.equal(load_env('VARIABLE', 'default-test-value'), 'default-test-value');
    });

    it('Should prefer non-prefixed over default value', () => {
        process.env['VARIABLE'] = 'non-prefixed test-value';

        const load_env = withPrefix('my_prefix__');

        assert.equal(load_env('VARIABLE', 'default-test-value'), 'non-prefixed test-value');
    });

});
