const Fs = require('fs');
const Path = require('path');
const callerId = require('caller-id');
const json = require('@ambassify/json-parse-safe');
const load_env = require('./index');

function findPackageName(from) {
    let contents;

    do {
        const pkg = Path.join(from, 'package.json');

        if (Fs.existsSync(pkg))
            contents = json(Fs.readFileSync(pkg, { encoding: 'utf-8' }));

        const parent = Path.dirname(from);
        from = from === parent ? null : parent;

    } while (from && !contents);

    return (contents || {}).name;
}

module.exports = function createLoadEnvWithPrefix(prefix, { allowFallback = true } = {}) {
    if (!prefix) {
        const caller = callerId.getData().filePath;
        let packageName = findPackageName(caller);

        if (packageName) {
            // remove scope if available
            packageName = packageName.split('/').pop();
            prefix = packageName.toLowerCase().replace(/[^a-z0-9]+/gi, '_') + '__';
        }
    }

    return (key, ...args) => {
        if (!allowFallback || typeof process.env[`${prefix}${key}`] !== 'undefined')
            key = `${prefix}${key}`;

        return load_env(key, ...args);
    };
};
