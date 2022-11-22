import React from 'react'

import * as S from './Heading.styles'
import { HeadingProps } from './Heading.types'

/**
 *  - Deve-se utilizar apenas quando deseja realçar atenção ou
 *    sinalizar a mudança de assunto dentro de uma página.
 *  - Pode-se alterar a aparência e o valor semântico de forma independente
 **/
const Heading = ({
  level = 'h2',
  variant = 'heading2',
  children,
  ...rest
}: HeadingProps) => (
  <S.BaseHeading as={level} variant={variant} {...rest}>
    {children}
  </S.BaseHeading>
)

export { Heading }
