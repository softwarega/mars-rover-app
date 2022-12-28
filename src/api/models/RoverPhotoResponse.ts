export interface RoverPhotoResponse {
  photos: { id: number; sol: number; camera: RoverPhotoCameraResponse; img_src: string; earth_date: string }[]
}

export interface RoverPhotoCameraResponse {
  id: number
  name: string
  full_name: string
}
