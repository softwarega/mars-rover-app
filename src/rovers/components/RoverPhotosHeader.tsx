import { Link } from "react-router-dom"

const RoverPhotosHeader: React.FC<{ name: string; solDay: string }> = ({ name, solDay }) => (
  <div className="header flex h-1/2 xl:h-1/3 lg:h-1/4 w-full items-center justify-center">
    <div className="flex items-center justify-center flex-col bg-black opacity-60 p-6">
      <h1 className="text-white text-2xl md:text-5xl">
        Mars Rover <span className="capitalize">{name}</span> Photos
      </h1>
      <p className="text-white text-md md:text-2xl text-justify">
        Six photos were randomly selected for the sol day {solDay}
      </p>
      <Link
        className="mt-5 text-white bg-blue-600 hover:bg-blue-500 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm md:text-base xl:text-xl w-full md:w-1/2 px-5 py-2.5 text-center"
        to="/"
      >
        Go Back
      </Link>
    </div>
  </div>
)

export { RoverPhotosHeader }
