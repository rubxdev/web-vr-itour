import React from 'react'
import { isMobile } from 'react-device-detect'
import { useStore } from '../../store'
import './VRSwitchButton.css'

const VRSwitchButton: React.FC = () => {
  const store = useStore()

  const switchVR = () => {
    const scene = document.querySelector('a-scene')
    const isVREnabled = store.get('isVREnabled')

    if (isMobile) {
      isVREnabled ? scene.exitVR() : scene.enterVR()
    } else {
      if (!isVREnabled) {
        scene.requestFullscreen()
      }
    }

    store.set('isVREnabled')(!isVREnabled)
  }

  return (
    <a href="#" onClick={switchVR} className={'vr-switch-button'}>
      <img src={`/images/${store.get('vrSwitchButtonIcon')}`} alt="" />
    </a>
  )
}

export default VRSwitchButton
