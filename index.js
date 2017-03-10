module.exports = function load_env(name, defaultValue) {
    if( typeof defaultValue == 'undefined' && !process.env[name] )
        throw new Error(`Environment variable ${name} is missing`);

    return process.env[name] || defaultValue;
}
