import {BatterStatesProvider} from './__states'
import {BatterCallbacksProvider} from './_callbacks'
import {BatterEffectsProvider} from './_effects'

import type {FC, PropsWithChildren} from 'react'

export const BatterProvider: FC<PropsWithChildren> = ({children}) => {
  return (
    <BatterStatesProvider>
      <BatterCallbacksProvider>
        <BatterEffectsProvider>{children}</BatterEffectsProvider>
      </BatterCallbacksProvider>
    </BatterStatesProvider>
  )
}
