module.exports = function parseArray(value) {
    return value.length ? value.split(',') : [];
}
