import { Router } from "express"
import {
  createPlace,
  deletePlace,
  getPlacesByCreatorId,
  getPlaceById,
  updatePlace,
} from "../controller/places"

export const placesRoutes = Router()

placesRoutes.get("/:pid", getPlaceById)

placesRoutes.get("/user/:uid", getPlacesByCreatorId)

placesRoutes.post("/", createPlace)

placesRoutes.patch("/:pid", updatePlace)

placesRoutes.delete("/:pid", deletePlace)
