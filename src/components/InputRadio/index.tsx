import React from 'react'

import * as S from './styles'

interface Props {
  legend: string
  options: string[]
}

const InputRadio = (props: Props) => {
  return (
    <S.Wrapper>
      <legend>{props.legend}</legend>
      <S.Options>
        {props.options.map((item) => {
          return (
            <div key={item}>
              <input type="radio" id={item} name={props.legend} value={item} />
              <label htmlFor={item}>{item}</label>
            </div>
          )
        })}
      </S.Options>
    </S.Wrapper>
  )
}

export default InputRadio
