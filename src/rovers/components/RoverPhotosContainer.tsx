import { useParams } from "react-router-dom"
import { useMemo, useState } from "react"

import { Loading } from "common"

import { useRoverPhotos } from "../hooks"
import { RoverPhotosHeader } from "./RoverPhotosHeader"
import { RoverPhoto } from "../models/RoverPhoto"
import { RoverPhotosList } from "./RoverPhotosList"
import { RoverPhotosFilters } from "./RoverPhotosFilters"

const TOTAL_RANDOM_PHOTOS = 6

const RoverPhotosContainer: React.FC = () => {
  const { roverName, solDay } = useParams()
  const [cameraFilter, setCameraFilter] = useState("")

  if (!roverName) {
    throw new Error("Bad request", {
      cause: { name: "400", message: "Rover name param is missing" },
    })
  }

  if (!solDay) {
    throw new Error("Bad request", {
      cause: { name: "400", message: "Rover sol day param is missing" },
    })
  }

  const { roverPhotos, isLoading } = useRoverPhotos(roverName, solDay, cameraFilter)

  const photos = useMemo(() => {
    const randomPhotos = new Array<RoverPhoto>()

    if (roverPhotos?.length) {
      const total = roverPhotos.length

      if (total <= TOTAL_RANDOM_PHOTOS) {
        return roverPhotos
      }

      for (let i = 0; i < TOTAL_RANDOM_PHOTOS; i++) {
        const randomIndex = Math.floor(Math.random() * total)
        randomPhotos.push(roverPhotos[randomIndex])
      }
    }

    return randomPhotos
  }, [roverPhotos])

  return (
    <div className="flex flex-col w-full h-screen">
      <RoverPhotosHeader name={roverName} solDay={solDay} />
      <RoverPhotosFilters filter={cameraFilter} setFilter={setCameraFilter} />
      <div className="flex w-full h-full bg-black overflow-auto">
        {isLoading ? (
          <div className="flex w-full justify-center items-center">
            <Loading />
          </div>
        ) : (
          <RoverPhotosList photos={photos} />
        )}
      </div>
    </div>
  )
}

export { RoverPhotosContainer }
