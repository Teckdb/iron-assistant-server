module.exports = app => {
    const deviceRouter = require("./devices.routes")
    const usersRouter = require("./users.routes")
    const areasRouter = require("./areas.routes")
    app.use("/api/areas", areasRouter)

}