import {BatterCallbacksProvider} from './_callbacks'
import {BatterEffectsProvider} from './_effects'

import type {FC, PropsWithChildren} from 'react'

export const BatterProvider: FC<PropsWithChildren> = ({children}) => {
  return (
    <BatterCallbacksProvider>
      <BatterEffectsProvider>{children}</BatterEffectsProvider>
    </BatterCallbacksProvider>
  )
}
