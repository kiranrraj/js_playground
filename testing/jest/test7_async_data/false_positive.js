
module.exports = function justReturnFalse() {
    setTimeout(() => {
        return false
    }, 1000)
}