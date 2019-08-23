import 'aframe'
import { Entity, Scene } from 'aframe-react'
import React from 'react'
import { TourScene, useStore } from '../store'
import './App.css'

const App: React.FC = () => {
  const store = useStore()
  const scene: TourScene = store
    .get('scenes')
    .filter(item => item.id === store.get('currentSceneId'))[0]

  return (
    <>
      <div className={'scene-wrapper'}>
        <Scene>
          <Entity primitive="a-sky" src={`/images/${scene.image}`} />
        </Scene>
      </div>
    </>
  )
}

export default App
