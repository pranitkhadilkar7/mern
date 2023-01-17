import { Router } from "express"
import { HttpError } from "../models/http-error"

export const placesRoutes = Router()

const DUMMY_PLACES = [
  {
    id: "p1",
    title: "Empire State Building",
    description: "One of the most famous sky scrapers in the world!",
    location: {
      lat: 40.7495793,
      lng: -73.984064,
    },
    address: "20 W 34th St., New York, NY 10001, United States",
    creator: "u1",
  },
]

placesRoutes.get("/:pid", (req, res, next) => {
  const placeId = req.params.pid
  const place = DUMMY_PLACES.find((place) => place.id === placeId)
  if (place) {
    return res.status(200).json({ message: "Found the place", place })
  }
  throw new HttpError("Could not find a place for the provided id", 404)
})

placesRoutes.get("/user/:uid", (req, res, next) => {
  const userId = req.params.uid
  const place = DUMMY_PLACES.find((place) => place.creator === userId)
  if (place) {
    return res.status(200).json({ message: "Found place for user", place })
  }
  throw new HttpError("Could not find a place for the provided user id", 404)
})
