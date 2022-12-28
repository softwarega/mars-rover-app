import { Loading } from "common"
import { RoverManifest } from "models"
import { useMemo } from "react"
import { RoverListCard, useRoverManifest } from "rovers"
import { ROVERS_NAMES } from "types"

import curiocity from "../../images/curiocity.webp"
import opportunity from "../../images/opportunity.webp"
import spirit from "../../images/spirit.webp"

const Content: React.FC = () => {
  const { manifest: curiosityManifest, isLoading: isLoadingCuriosityManifest } = useRoverManifest({
    name: ROVERS_NAMES.CURIOSITY,
    avatar: curiocity,
  })
  const { manifest: opportunityManifest, isLoading: isLoadingOpportunityManifest } = useRoverManifest({
    name: ROVERS_NAMES.OPPORTUNITY,
    avatar: opportunity,
  })
  const { manifest: spiritManifest, isLoading: isLoadingSpiritManifest } = useRoverManifest({
    name: ROVERS_NAMES.SPIRIT,
    avatar: spirit,
  })

  const rovers = useMemo(() => {
    const manifests = new Array<RoverManifest>()

    if (curiosityManifest) {
      manifests.push(curiosityManifest)
    }

    if (opportunityManifest) {
      manifests.push(opportunityManifest)
    }

    if (spiritManifest) {
      manifests.push(spiritManifest)
    }

    return manifests
  }, [curiosityManifest, opportunityManifest, spiritManifest])
  const isLoading = isLoadingCuriosityManifest || isLoadingOpportunityManifest || isLoadingSpiritManifest

  return (
    <div className="flex w-full h-full bg-black overflow-auto">
      {isLoading ? (
        <div className="flex w-full justify-center items-center">
          <Loading />
        </div>
      ) : (
        <RoverListCard rovers={rovers} />
      )}
    </div>
  )
}

export { Content }
