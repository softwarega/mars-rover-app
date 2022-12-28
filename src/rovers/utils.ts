import { RoverManifestResponse } from "api/models/RoverManifestReponse"
import { RoverManifest } from "models"

const manifestResponseToRoverManifest = (avatar: string, response: RoverManifestResponse) => {
  const {
    photo_manifest: { name, status, landing_date, launch_date, max_date, max_sol, total_photos },
  } = response

  return new RoverManifest(avatar, name, landing_date, launch_date, status, max_sol, max_date, total_photos)
}

const getError = (roverName: string) =>
  new Error("Not found", {
    cause: { name: "404", message: `No manifest found for rover ${roverName}` },
  })

export { manifestResponseToRoverManifest, getError }
