import express from "express";
import cors from 'cors'

const app = express();

app.use(
    cors({
        origin: process.env.CORS_ORIGIN,
        Credential: true,

    })
)

// common middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"))

// import routes
import healthcheckRouter from './routes/healthcheck.route.js';
import userRouter from './routes/user.route.js'


// routes
app.use("/api/v1/healthcheck", healthcheckRouter);
app.use('/api/v1/users',userRouter)

export { app } 