import { RoverManifest } from "models"

import { RoverCardItem } from "./RoverCardItem"

const RoverListCard: React.FC<Props> = ({ rovers }) => {
  if (!rovers.length) {
    return <div className="text-white text-3xl flex items-center justify-center w-full">No rovers manifests found</div>
  }

  return (
    <div className="flex flex-wrap justify-evenly w-full p-2 xl:p-10 gap-2">
      {!rovers.length ? (
        <h3 className="text-xl">No roverts found</h3>
      ) : (
        rovers.map((rover) => <RoverCardItem key={rover.getName()} rover={rover} />)
      )}
    </div>
  )
}

type Props = {
  rovers: RoverManifest[]
}

export { RoverListCard }
