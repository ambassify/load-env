module.exports = function parseNumber(value) {
    if (isNaN(value))
        return;

    return parseFloat(value);
}
