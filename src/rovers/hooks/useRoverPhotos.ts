import { useQuery } from "react-query"

import { useClient } from "api"
import { RoverPhotoResponse } from "api/models/RoverPhotoResponse"
import { CustomError, displayNotificationError } from "errors"

import { RoverPhoto } from "../models/RoverPhoto"

const useRoverPhotos = (roverName: string, sol: string, cameraFilter: string) => {
  const { search } = useClient()
  const queryKey = ["rover-photos", roverName, sol, cameraFilter]
  const filters = new URLSearchParams({
    sol,
    ...(cameraFilter ? { camera: cameraFilter } : {}),
  })

  const { data, isLoading } = useQuery(
    queryKey,
    async () => {
      const response = await search<RoverPhotoResponse>(`rovers/${roverName}/photos`, filters)

      if (!response) {
        throw new Error("Something went wrong trying to retrieve the rover photos")
      }

      const photos = roverPhotoResponseToRoverPhoto(response)

      return photos
    },
    {
      onError: (error: CustomError) => {
        displayNotificationError(error)
      },
    },
  )

  return { roverPhotos: data as RoverPhoto[], isLoading }
}

const roverPhotoResponseToRoverPhoto = (response: RoverPhotoResponse) =>
  response.photos.map(
    ({ camera, earth_date, id, img_src, sol }) => new RoverPhoto(id, sol, camera.full_name, img_src, earth_date),
  )

export { useRoverPhotos }
