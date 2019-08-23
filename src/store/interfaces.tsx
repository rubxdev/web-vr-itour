export interface TourSceneLink {
  id: string
  title: string
  position: {}
  scale: {}
}

export interface TourScene {
  id: string
  image: string
  links: TourSceneLink[]
}

export interface State {
  scenes: TourScene[]
  currentSceneId: string
}
