const path = require("node:path");

module.exports = {
    index:  (req, res) => {
        res.sendFile(path.join(__dirname, "../views/portfolio.html"))
    }
}
