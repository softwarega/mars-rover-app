import { useState } from "react"
import classNames from "classnames"
import { format, parseISO } from "date-fns"

import { Loading } from "common"

import { RoverPhoto } from "../models/RoverPhoto"

const RoverPhotoItem: React.FC<{ photo: RoverPhoto }> = ({ photo }) => {
  const [isLoading, setIsLoading] = useState(true)

  return (
    <div className="flex relative w-full items-center justify-center">
      {isLoading && (
        <div className="absolute">
          <Loading />
        </div>
      )}
      <div className="w-full relative h-full flex flex-col text-white">
        <div className="flex justify-between">
          <p>{photo.getCamera()}</p>
          <p>{format(parseISO(photo.getEarthDate() ?? ""), "MMM dd, yyyy")}</p>
        </div>
        <div className="border h-full w-full">
          <img
            alt="img"
            src={photo.getImgSrc()}
            loading="lazy"
            className={classNames("w-full h-full object-cover p-1", { invisible: isLoading })}
            onLoad={() => {
              setIsLoading(false)
            }}
          />
        </div>
      </div>
    </div>
  )
}

export { RoverPhotoItem }
