function isUndefined(v) { return typeof v == 'undefined'; }

module.exports = function load_env(name, defaultValue, parser) {
    var value = process.env[name];

    if (isUndefined(defaultValue) && isUndefined(value))
        throw new Error(`Environment variable ${name} is missing`);

    if (typeof parser == 'function' && !isUndefined(value))
        value = parser(value);

    if (isUndefined(defaultValue) && isUndefined(value))
        throw new Error(`Environment variable ${name} could not be parsed`);

    return isUndefined(value) ? defaultValue : value;
};
