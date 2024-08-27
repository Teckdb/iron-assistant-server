module.exports = app => {
    const devicesRouter = require("./devices.routes")
    app.use("/api/devices", devicesRouter)

    const usersRouter = require("./users.routes")
    app.use("/api/users", usersRouter)

    const areasRouter = require("./areas.routes")
    app.use("/api/areas", areasRouter)

    const automationRouter = require("./automation.routes")
    app.use("/api/automations", automationRouter)

    const authRouter = require("./auth.routes")
    app.use("/api/auth", authRouter)

    const uploadRoutes = require("./upload.routes")
    app.use("/api/upload", uploadRoutes)
}