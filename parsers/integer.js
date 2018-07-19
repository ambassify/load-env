module.exports = function parseInteger(value) {
    if (isNaN(value))
        return;

    return parseInt(value);
};
