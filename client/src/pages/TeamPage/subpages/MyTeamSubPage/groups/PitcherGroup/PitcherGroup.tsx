import {useCallback} from 'react'

import {usePitcherStatesContext} from '@context'

import * as OT from '@objectType'

import type {FC} from 'react'
import type {DivCommonProps} from '@prop'

import './PitcherGroup.scss'

type PitcherGroupProps = DivCommonProps & {
  pitcher: OT.PitcherType
  pitcherIdx: number
}

export const PitcherGroup: FC<PitcherGroupProps> = ({pitcher, pitcherIdx, ...props}) => {
  const {setMovePitcherOId} = usePitcherStatesContext()

  const onDragEnter = useCallback((e: React.DragEvent<HTMLDivElement>) => {
    e.stopPropagation()
  }, [])

  const onDragLeave = useCallback((e: React.DragEvent<HTMLDivElement>) => {
    e.stopPropagation()
  }, [])

  const onDragStart = useCallback(
    (pitcherOId: string) => (e: React.DragEvent<HTMLDivElement>) => {
      e.stopPropagation()

      setMovePitcherOId(pitcherOId)
    },
    []
  )

  const onDrop = useCallback(
    (pitcher: OT.PitcherType, pitcherIdx: number) => (e: React.DragEvent<HTMLDivElement>) => {
      e.stopPropagation()

      // if (moveDirOId) {
      //   moveDirectory(dirOId, moveDirOId, null)
      // } // ::
      // else if (moveFileOId) {
      //   moveFile(dirOId, moveFileOId, null)
      // }
    },
    []
  )

  return (
    <div
      className={`PitcherGroup`}
      onDragEnter={onDragEnter}
      onDragLeave={onDragLeave}
      onDragStart={onDragStart(pitcher.pitcherOId)}
      onDrop={onDrop(pitcher, pitcherIdx)}
      {...props} // ::
    >
      {pitcher.name}
    </div>
  )
}
