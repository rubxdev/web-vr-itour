import { createConnectedStore } from 'undux'
import { State } from '.'

const initialState: State = {
  scenes: [{ id: 'hall', image: 'ed_hall.jpg', links: [] }],
  currentSceneId: 'hall',
}

export const { useStore, Container } = createConnectedStore(initialState)
