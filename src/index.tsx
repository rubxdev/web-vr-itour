import React from 'react'
import ReactDOM from 'react-dom'
import App from './app'
import { Container } from './store'

const Root: React.FC = () => (
  <Container>
    <App />
  </Container>
)

ReactDOM.render(<Root />, document.getElementById('root'))
