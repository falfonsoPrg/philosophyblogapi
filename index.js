const express = require('express')
const dotenv = require('dotenv')
const cors = require('cors');
const app = express()
const port = process.env.PORT || 4000
dotenv.config();

//Swagger configuration
const swaggerUi = require('swagger-ui-express')
const swaggerFile = require('./swagger_output.json')
app.use('/swagger', swaggerUi.serve, swaggerUi.setup(swaggerFile))


//Cors configuration
const config = {
    application: {
        cors: {
            server: [{
                origin: "*",
                credentials: true
            }]
        }
    }
}
app.use(cors(
    config.application.cors.server
));

//Database
require("./database/sequelize")

//Import Routes
const AuthorizationRoutes = require("./routes/AuthorizationRoutes")
const AudiovisualRoutes = require("./routes/AudiovisualRoutes")
const DisertacionRoutes = require("./routes/DisertacionRoutes")
const GlosarioRoutes = require("./routes/GlosarioRoutes")
const ReseñaRoutes = require("./routes/ReseñaRoutes")
const ComentarioRoutes = require("./routes/ComentarioRoutes")


//Middleware
app.use(express.urlencoded({ extended: false, limit: '50mb' }))
app.use(express.json({limit: '50mb'}))
app.use(express.static('public'));

//Fisrt route
app.get('/',(req,res)=>{
    res.send("This project for a blog <a href='/swagger'>Swagger</a>")
})

//Declare routes
app.use("/api/auth",AuthorizationRoutes)
app.use("/api/audiovisuals",AudiovisualRoutes)
app.use("/api/disertacions",DisertacionRoutes)
app.use("/api/glosarios",GlosarioRoutes)
app.use("/api/resenias",ReseñaRoutes)
app.use("/api/comentarios",ComentarioRoutes)


//Initialize the server
app.listen(port,() => {
    console.log('Server on port ' + port)
})
