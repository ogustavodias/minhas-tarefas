// React
import React from 'react'

// Styles
import * as S from './styles'

interface Props {
  legend: string
  options: string[]
  priority: string
  setPriority: React.Dispatch<React.SetStateAction<string>>
}

const InputRadio = ({ legend, options, priority, setPriority }: Props) => {
  return (
    <S.Wrapper>
      <legend>{legend}</legend>
      <S.Options>
        {options.map((item) => {
          return (
            <div key={item}>
              <input
                type="radio"
                id={item}
                name={legend}
                value={item}
                checked={priority === item}
                onChange={({ target }) => setPriority(target.value)}
              />
              <label htmlFor={item}>{item}</label>
            </div>
          )
        })}
      </S.Options>
    </S.Wrapper>
  )
}

export default InputRadio
