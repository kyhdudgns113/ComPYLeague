import {createContext, useContext, useEffect} from 'react'
import {useLocation} from 'react-router-dom'

import type {FC, PropsWithChildren} from 'react'
import {useLefterActions} from '@redux'

// prettier-ignore
type ContextType = {}
// prettier-ignore
export const URLEffectsContext = createContext<ContextType>({})

export const useURLEffectsContext = () => useContext(URLEffectsContext)

export const URLEffectsProvider: FC<PropsWithChildren> = ({children}) => {
  const location = useLocation()

  const LA = useLefterActions()

  useEffect(() => {
    const pathParts = location.pathname.split('/main/')
    if (pathParts.length > 1) {
      const nowTab = pathParts[1].split('/')[0]

      switch (nowTab) {
        case 'setting':
          LA.setLefterTabSetting()
          break
        case 'pitchRecord':
          LA.setLefterTabPitchRecord()
          break
        default:
          LA.setLefterTabNull()
          break
      }
    } // ::
    else {
      LA.setLefterTabNull()
    }
  }, [location])
  //
  return <URLEffectsContext.Provider value={{}}>{children}</URLEffectsContext.Provider>
}
