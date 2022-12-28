import { useQuery } from "react-query"

import { useClient } from "api"
import { RoverManifest } from "models"
import { RoverManifestResponse } from "api/models/RoverManifestReponse"

import { getError, manifestResponseToRoverManifest } from "../utils"
import { Rover } from "../models/Rover"

const useRoverManifest = (rover: Rover) => {
  const { read } = useClient()
  const queryKey = [rover]

  const { data, isLoading } = useQuery(
    queryKey,
    async () => {
      const response = await read<RoverManifestResponse>("manifests", rover.name)

      if (!response) {
        throw getError(rover.name)
      }

      const manifest = manifestResponseToRoverManifest(rover.avatar, response)

      return manifest
    },
    { useErrorBoundary: true },
  )

  return {
    manifest: data as RoverManifest,
    isLoading,
  }
}

export { useRoverManifest }
