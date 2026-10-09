import {BrowserRouter} from 'react-router-dom'
import {createRoot} from 'react-dom/client'
import {Provider} from 'react-redux'

import {BatterProvider, PitcherProvider, URLProvider} from '@context'
import {store} from '@redux'

import App from './App.tsx'

import './base/styles/index.css'

createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <Provider store={store}>
      <URLProvider>
        <PitcherProvider>
          <BatterProvider>
            <App />
          </BatterProvider>
        </PitcherProvider>
      </URLProvider>
    </Provider>
  </BrowserRouter>
)
