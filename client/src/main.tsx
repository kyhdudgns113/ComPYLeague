import {BrowserRouter} from 'react-router-dom'
import {createRoot} from 'react-dom/client'
import {Provider} from 'react-redux'

import {BatterProvider, PitcherProvider, RecordProvider, URLProvider} from '@context'
import {store} from '@redux'

import App from './App.tsx'

import './base/styles/index.css'

createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <Provider store={store}>
      <PitcherProvider>
        <BatterProvider>
          <RecordProvider>
            <URLProvider>
              <App />
            </URLProvider>
          </RecordProvider>
        </BatterProvider>
      </PitcherProvider>
    </Provider>
  </BrowserRouter>
)
