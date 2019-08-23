import { createConnectedStore } from 'undux'
import { State } from '.'

const initialState: State = {
  scenes: [{ id: 'hall', image: 'ed_hall.jpg', links: [] }],
  currentSceneId: 'hall',
  vrSwitchButtonIcon: 'vr_switch_button_icon.svg',
  isVREnabled: false,
}

export const { useStore, Container } = createConnectedStore(initialState)
