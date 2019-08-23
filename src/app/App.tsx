import 'aframe'
import { Entity, Scene } from 'aframe-react'
import React from 'react'
import { TourScene, useStore } from '../store'

const App: React.FC = () => {
  const store = useStore()
  const scene: TourScene = store
    .get('scenes')
    .filter(item => item.id === store.get('currentSceneId'))[0]

  return (
    <>
      <Scene>
        <Entity primitive="a-sky" src={`/images/${scene.image}`} />
      </Scene>
    </>
  )
}

export default App
