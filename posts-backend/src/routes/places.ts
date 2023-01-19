import { Router } from "express"
import {
  createPlace,
  deletePlace,
  getPlaceByCreatorId,
  getPlaceById,
  updatePlace,
} from "../controller/places"

export const placesRoutes = Router()

placesRoutes.get("/:pid", getPlaceById)

placesRoutes.get("/user/:uid", getPlaceByCreatorId)

placesRoutes.post("/", createPlace)

placesRoutes.patch("/:pid", updatePlace)

placesRoutes.delete("/:pid", deletePlace)
