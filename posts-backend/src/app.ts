import express from "express"
import bodyParser from "body-parser"
import { testRouter } from "./routes/test-route"

const app = express()

app.use(bodyParser.json())

app.use(testRouter)

app.listen(3000)
