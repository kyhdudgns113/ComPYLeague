import {useEffect, useState} from 'react'

import {usePitcherStatesContext} from '@context'

import type {FC} from 'react'
import type {DivCommonProps} from '@prop'

import * as CT from '@commonType'
import * as G from '../../groups'
import * as OT from '@objectType'

import './PitcherArrObject.scss'

type PitcherArrObjectProps = DivCommonProps & {
  pitcherType: CT.Type_Pitcher
}

export const PitcherArrObject: FC<PitcherArrObjectProps> = ({pitcherType, ...props}) => {
  const {CPArr, RPArr, SPArr} = usePitcherStatesContext()

  const [pitcherArr, setPitcherArr] = useState<OT.PitcherType[]>([])

  /**
   * targetArr: pitcherType 에 따라 배열을 선택
   * - (콜백함수)() 구문을 통해 콜백함수를 바로 실행시키고, 그 리턴값을 변수로 씀
   * - 별 문법이 다 있네...
   */
  const targetArr = (() => {
    switch (pitcherType) {
      case '선발':
        return SPArr
      case '중계':
        return RPArr
      case '마무리':
        return CPArr
    }
  })()

  // 자동갱신 : pitcherArr
  useEffect(() => {
    setPitcherArr(targetArr)
  }, [targetArr])

  return (
    <div className={`PitcherArrObject`} onDragOver={e => e.preventDefault()} {...props}>
      {pitcherArr.map((pitcher, pitcherIdx) => {
        return <G.PitcherGroup key={pitcherIdx} pitcher={pitcher} pitcherIdx={pitcherIdx} />
      })}
    </div>
  )
}
