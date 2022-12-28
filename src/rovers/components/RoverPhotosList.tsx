import { RoverPhoto } from "rovers/models/RoverPhoto"
import { RoverPhotoItem } from "./RoverPhotoItem"

const RoverPhotosList: React.FC<{ photos: RoverPhoto[] }> = ({ photos }) => {
  if (!photos.length) {
    return <div className="text-white text-4xl flex items-center justify-center w-full">No photos found</div>
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-5 w-full h-full p-5">
      {photos.map((photo) => (
        <RoverPhotoItem key={photo.getId()} photo={photo} />
      ))}
    </div>
  )
}

export { RoverPhotosList }
