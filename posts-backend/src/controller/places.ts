import { NextFunction, Request, Response } from "express"
import { HttpError } from "../models/http-error"
import { Place } from "../types/places-types"
import { v4 } from "uuid"

let DUMMY_PLACES: Place[] = [
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

export function getPlaceById(
  req: Request<{
    pid: string
  }>,
  res: Response,
  next: NextFunction
) {
  const placeId = req.params.pid
  const place = DUMMY_PLACES.find((place) => place.id === placeId)
  if (place) {
    return res.status(200).json({ message: "Found the place", place })
  }
  throw new HttpError("Could not find a place for the provided id", 404)
}

export function getPlaceByCreatorId(
  req: Request<{ uid: string }>,
  res: Response,
  next: NextFunction
) {
  const userId = req.params.uid
  const place = DUMMY_PLACES.find((place) => place.creator === userId)
  if (place) {
    return res.status(200).json({ message: "Found place for user", place })
  }
  throw new HttpError("Could not find a place for the provided user id", 404)
}

export function createPlace(
  req: Request<any, any, Omit<Place, "id">>,
  res: Response,
  next: NextFunction
) {
  const place = req.body
  const createdPlace = { ...place, id: v4() }
  DUMMY_PLACES.push(createdPlace)
  res
    .status(201)
    .json({ message: "Place created successfully!", place: createdPlace })
}

export function updatePlace(
  req: Request<
    {
      pid: string
    },
    any,
    Pick<Place, "title" | "description">
  >,
  res: Response,
  next: NextFunction
) {
  const { title, description } = req.body
  const placeId = req.params.pid
  const placeIndex = DUMMY_PLACES.findIndex((place) => place.id === placeId)
  if (placeIndex < 0) {
    throw new HttpError(`Can not find the place with id ${placeId}`, 404)
  }
  const updatedPlace = { ...DUMMY_PLACES[placeIndex] }
  updatedPlace.title = title
  updatedPlace.description = description
  DUMMY_PLACES[placeIndex] = updatedPlace
  res.status(200).json({ place: updatedPlace })
}

export function deletePlace(
  req: Request<
    {
      pid: string
    },
    any,
    any
  >,
  res: Response,
  next: NextFunction
) {
  const placeId = req.params.pid
  DUMMY_PLACES = DUMMY_PLACES.filter((place) => place.id !== placeId)
  res.status(200).json({ message: "Deleted place" })
}
