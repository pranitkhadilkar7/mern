import express, { NextFunction, Request, Response } from "express"
import bodyParser from "body-parser"

import { placesRoutes } from "./routes/places"
import { HttpError } from "./models/http-error"

// run().catch(console.dir)

const app = express()

app.use(bodyParser.json())

app.use("/places", placesRoutes)

app.use((err: HttpError, req: Request, res: Response, next: NextFunction) => {
  res.status(err.statusCode || 500).json({
    message: err.message || "Something went wrong. Please type again.",
  })
})

app.listen(3000)
