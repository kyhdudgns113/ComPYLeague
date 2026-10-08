import {useCallback} from 'react'

import {usePitcherCallbacksContext, usePitcherStatesContext} from '@context'

import * as OT from '@objectType'
import * as V from '@value'

import type {FC} from 'react'
import type {DivCommonProps} from '@prop'

import './PitcherGroup.scss'

type PitcherGroupProps = DivCommonProps & {
  pitcher: OT.PitcherType
  pitcherIdx: number
}

export const PitcherGroup: FC<PitcherGroupProps> = ({pitcher, pitcherIdx, ...props}) => {
  const {movePitcher, setMovePitcher, setCPArr, setRPArr, setSPArr} = usePitcherStatesContext()
  const {movePitcherInArr} = usePitcherCallbacksContext()

  const onDragEnter = useCallback((e: React.DragEvent<HTMLDivElement>) => {
    e.stopPropagation()
  }, [])

  const onDragLeave = useCallback((e: React.DragEvent<HTMLDivElement>) => {
    e.stopPropagation()
  }, [])

  const onDragStart = useCallback(
    (pitcher: OT.PitcherType) => (e: React.DragEvent<HTMLDivElement>) => {
      e.stopPropagation()
      setMovePitcher(pitcher)
    },
    []
  )

  const onDrop = useCallback(
    (movePitcher: OT.PitcherType, pitcher: OT.PitcherType, pitcherIdx: number) => (e: React.DragEvent<HTMLDivElement>) => {
      /**
       * movePitcher: 이동할 투수
       * pitcher: 현재 요소의 투수, movePitcher랑 같을수도, 다를수도 있음
       * pitcherIdx: 현재 요소의 인덱스
       */
      e.stopPropagation()

      movePitcherInArr(movePitcher, pitcherIdx, pitcher.pitcherType, pitcher.teamName).then(res => {
        const {isSuccess} = res
        if (isSuccess) {
          const {CPArr, RPArr, SPArr} = res
          setCPArr(CPArr)
          setRPArr(RPArr)
          setSPArr(SPArr)
        }
      })
      setMovePitcher(V.NULL_PITCHER_OBJ)
    },
    []
  )

  return (
    <div
      className={`PitcherGroup`}
      draggable
      onDragEnter={onDragEnter}
      onDragLeave={onDragLeave}
      onDragOver={e => e.preventDefault()}
      onDragStart={onDragStart(pitcher)}
      onDrop={onDrop(movePitcher, pitcher, pitcherIdx)}
      {...props} // ::
    >
      {pitcher.name}
    </div>
  )
}
