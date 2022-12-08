const express = require("express")
const app = express()
const mongoose = require("mongoose")
const passport = require("passport")
const session = require("express-session")
const MongoStore = require("connect-mongo")(session)
const flash = require("express-flash")
const logger = require("morgan")
const moment = require("moment")
const nodemailer = require("nodemailer")
const connectDB = require("./config/database")
const mainRoutes = require("./routes/main")
const dashboardRoutes = require("./routes/dashboard")
const editRoutes = require("./routes/edit")
const methodOverride = require("method-override")
require("dotenv").config({ path: "./config/.env"})

// Passport
require("./config/passport")(passport)

// Set Middleware
app.set("view engine", "ejs")
app.use(express.static("public"))
app.use('/images', express.static('images'));
app.use(express.urlencoded({extended: true}))
app.use(express.json())
app.use(logger("dev"))
app.use(methodOverride('_method'))

// Sessions
app.use(
    session({
        secret: "keyboard cat",
        resave: false,
        saveUninitialized: false,
        store: new MongoStore({ mongooseConnection: mongoose.connection }),
    })
)

// Passport Middleware
app.use(passport.initialize())
app.use(passport.session())

app.use(flash())

// Set Routes
app.use("/", mainRoutes)
app.use("/dashboard", dashboardRoutes)
app.use("/edit", editRoutes)

//Connect to DB before listening
connectDB().then(() => {
    app.listen(process.env.PORT, ()=> {
        console.log(`Server is running on port ${process.env.PORT}`)
    })
})