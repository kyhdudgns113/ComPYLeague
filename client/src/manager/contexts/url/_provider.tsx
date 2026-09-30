import {URLStatesProvider} from './__states'
import {URLCallbacksProvider} from './_callbacks'
import {URLEffectsProvider} from './_effects'

import type {FC, PropsWithChildren} from 'react'

export const URLProvider: FC<PropsWithChildren> = ({children}) => {
  return (
    <URLStatesProvider>
      <URLCallbacksProvider>
        <URLEffectsProvider>{children}</URLEffectsProvider>
      </URLCallbacksProvider>
    </URLStatesProvider>
  )
}
