import React from 'react'
import { FiCheck, FiMinus } from 'react-icons/fi'

import * as S from './Checkbox.styles'
import { CheckboxProps } from './Checkbox.types'
import { nanoid } from 'nanoid'

const Checkbox = ({
  defaultChecked = 'indeterminate',
  checked = defaultChecked,
  onCheckedChange,
  id = nanoid(10),
  children,
  ...rest
}: CheckboxProps) => {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
      <S.Checkbox.Root
        id={id}
        checked={checked}
        onCheckedChange={onCheckedChange}
        {...rest}
      >
        <S.Checkbox.Indicator>
          {checked === 'indeterminate' && <FiMinus />}
          {checked === true && <FiCheck />}
        </S.Checkbox.Indicator>
      </S.Checkbox.Root>
      <S.Checkbox.Label htmlFor={id}>{children}</S.Checkbox.Label>
    </div>
  )
}

export { Checkbox }
