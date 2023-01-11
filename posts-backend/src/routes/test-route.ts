import { Router } from "express"

export const testRouter = Router()

testRouter.get("/get/data", (req, res, next) => {
  res.status(200).json({ message: "The request is successful!!" })
})
