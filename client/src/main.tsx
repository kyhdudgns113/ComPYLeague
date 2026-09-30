import {BrowserRouter} from 'react-router-dom'
import {createRoot} from 'react-dom/client'
import {Provider} from 'react-redux'

import {URLProvider} from '@context'
import {store} from '@redux'

import App from './App.tsx'

import './index.css'

createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <Provider store={store}>
      <URLProvider>
        <App />
      </URLProvider>
    </Provider>
  </BrowserRouter>
)
