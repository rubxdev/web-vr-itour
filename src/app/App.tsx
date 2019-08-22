import 'aframe'
import { Entity, Scene } from 'aframe-react'
import React from 'react'
import EdHall from '../assets/images/ed_hall.jpg';

const App: React.FC = () => {
  return (
    <>
      <Scene>
        <Entity primitive="a-sky" src={EdHall}/>
      </Scene>
    </>
  )
}

export default App
