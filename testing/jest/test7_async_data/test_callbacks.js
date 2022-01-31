module.exports = (x, y, callback) => {
    setTimeout(() => { callback(x + y); }, 1000)
}