import {PitcherCallbacksProvider} from './_callbacks'
import {PitcherEffectsProvider} from './_effects'

import type {FC, PropsWithChildren} from 'react'

export const PitcherProvider: FC<PropsWithChildren> = ({children}) => {
  return (
    <PitcherCallbacksProvider>
      <PitcherEffectsProvider>{children}</PitcherEffectsProvider>
    </PitcherCallbacksProvider>
  )
}
