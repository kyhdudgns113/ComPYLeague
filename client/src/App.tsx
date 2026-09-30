import {Route, Routes} from 'react-router-dom'
import {Template} from './template'

import './base/styles/App.css'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Template />} />
    </Routes>
  )
}

export default App
