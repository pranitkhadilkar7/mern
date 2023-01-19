import { Router } from "express"
import {
  createPlace,
  getPlaceByCreatorId,
  getPlaceById,
} from "../controller/places"

export const placesRoutes = Router()

placesRoutes.get("/:pid", getPlaceById)

placesRoutes.get("/user/:uid", getPlaceByCreatorId)

placesRoutes.post("/", createPlace)
