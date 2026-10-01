import {Route, Routes} from 'react-router-dom'
import {Template} from './template'

import * as P from './pages'

import './base/styles/App.css'

function App() {
  return (
    <Routes>
      <Route path="/" element={<P.RedirectHomePage />} />

      <Route path="/main/*" element={<Template />}>
        <Route index element={<P.IntroPage />} />
        <Route path="pitchRecord" element={<P.PitchRecordPage />} />
        <Route path="setting" element={<P.SettingPage />} />
        <Route path="setting/*">
          <Route index element={<P.SettingPage />} />
          <Route path=":teamIdx" element={<P.TeamPage />} />
        </Route>
      </Route>
    </Routes>
  )
}

export default App
