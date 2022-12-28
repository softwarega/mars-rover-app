import classNames from "classnames"
import { useCallback } from "react"

enum CAMERAS {
  FHAZ = "FHAZ",
  RHAZ = "RHAZ",
  NAVCAM = "NAVCAM",
}

const RoverPhotosFilters: React.FC<Props> = ({ filter, setFilter }) => {
  const handleOnclick = useCallback(
    (camera: string) => {
      let newFilter = ""

      if (filter !== camera) {
        newFilter = camera
      }

      setFilter(newFilter)
    },
    [filter, setFilter],
  )

  return (
    <div className="flex flex-wrap md:flex-nowrap w-full h-content p-2 gap-2 bg-black">
      <button
        onClick={() => {
          handleOnclick(CAMERAS.FHAZ)
        }}
        className={classNames(
          "text-black bg-white hover:bg-blue-300 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm md:text-base xl:text-xl w-full md:w-1/2 px-5 py-2.5 text-center",
          { "bg-blue-300": filter === CAMERAS.FHAZ },
        )}
      >
        Front Hazard Avoidance Camera
      </button>
      <button
        onClick={() => {
          handleOnclick(CAMERAS.RHAZ)
        }}
        className={classNames(
          "text-black bg-white hover:bg-blue-300 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm md:text-base xl:text-xl w-full md:w-1/2 px-5 py-2.5 text-center",
          { "bg-blue-300": filter === CAMERAS.RHAZ },
        )}
      >
        Rear Hazard Avoidance Camera
      </button>
      <button
        onClick={() => {
          handleOnclick(CAMERAS.NAVCAM)
        }}
        className={classNames(
          "text-black bg-white hover:bg-blue-300 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm md:text-base xl:text-xl w-full md:w-1/2 px-5 py-2.5 text-center",
          { "bg-blue-300": filter === CAMERAS.NAVCAM },
        )}
      >
        Navigation Camera
      </button>
    </div>
  )
}

type Props = {
  filter: string
  setFilter: React.Dispatch<React.SetStateAction<string>>
}

export { RoverPhotosFilters }
