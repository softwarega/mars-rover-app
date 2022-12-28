class RoverManifest {
  private avatar
  private name
  private landinDate
  private launchDate
  private status
  private maxSol
  private maxDate
  private totalPhotos

  constructor(
    avatar: string,
    name: string,
    landingDate: string,
    launchDate: string,
    status: string,
    maxSol: number,
    maxDate: string,
    totalPhotos: number,
  ) {
    this.avatar = avatar
    this.name = name
    this.landinDate = landingDate
    this.launchDate = launchDate
    this.status = status
    this.maxSol = maxSol
    this.maxDate = maxDate
    this.totalPhotos = totalPhotos
  }

  getName() {
    return this.name
  }

  getLandingDate() {
    return this.landinDate
  }

  getLaunchDate() {
    return this.launchDate
  }

  getStatus() {
    return this.status
  }

  getMaxSol() {
    return this.maxSol
  }

  getMaxDate() {
    return this.maxDate
  }

  getTotalPhotos() {
    return this.totalPhotos
  }

  getAvatar() {
    return this.avatar
  }
}

export { RoverManifest }
