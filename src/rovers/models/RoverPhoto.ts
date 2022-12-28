class RoverPhoto {
  private id
  private sol
  private camera
  private imgSrc
  private earthDate

  constructor(id: number, sol: number, camera: string, imgSrc: string, earthDate: string) {
    this.id = id
    this.sol = sol
    this.camera = camera
    this.imgSrc = imgSrc
    this.earthDate = earthDate
  }

  getId() {
    return this.id
  }

  getSol() {
    return this.sol
  }

  getCamera() {
    return this.camera
  }

  getImgSrc() {
    return this.imgSrc
  }

  getEarthDate() {
    return this.earthDate
  }
}

export { RoverPhoto }
