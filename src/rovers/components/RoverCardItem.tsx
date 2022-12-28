import { useNavigate } from "react-router-dom"
import { format, parseISO } from "date-fns"

import { RoverManifest } from "models"

const RoverCardItem: React.FC<{ rover: RoverManifest }> = ({ rover }) => {
  const navigate = useNavigate()

  const handleOnClick = () => {
    const solDayRandom = Math.floor(Math.random() * rover.getMaxSol())
    navigate(`/rover/${rover.getName().toLowerCase()}/sol/${solDayRandom}`)
  }

  return (
    <div className="flex flex-col sm:flex-row w-full rounded-md bg-white cursor-pointer" onClick={handleOnClick}>
      <img
        alt="avatar"
        className="object-cover rounded-t-md md:rounded-t-none md:rounded-l-md rounded-l-none w-full md:w-48 h-full"
        src={rover.getAvatar()}
      />

      <div className="flex flex-col w-full p-3">
        <div className="flex justify-between items-center">
          <p className="font-medium text-2xl">{rover.getName()}</p>
          <span title="The Rover's mission status" className="bg-gray-600 rounded-md px-1 py-1 h-fit flex text-white">
            {rover.getStatus()}
          </span>
        </div>
        <div className="mt-5 flex justify-between items-center">
          <span>Launch date: </span>
          <span className="font-medium">{format(parseISO(rover.getLaunchDate() ?? ""), "MMM dd, yyyy")}</span>
        </div>
        <hr className="my-2" />
        <div className="flex justify-between items-center">
          <span>Landing date: </span>
          <span className="font-medium">{format(parseISO(rover.getLandingDate() ?? ""), "MMM dd, yyyy")}</span>
        </div>
        <hr className="my-2" />
        <div className="flex justify-between items-center">
          <span>Total photos: </span>
          <span className="font-medium">{rover.getTotalPhotos()}</span>
        </div>
      </div>
    </div>
  )
}

export { RoverCardItem }
