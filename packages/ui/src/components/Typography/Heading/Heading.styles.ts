import styled from 'styled-components'

import { BaseHeadingProps } from './Heading.types'

const BaseHeading = styled.p<BaseHeadingProps>`
  ${({ theme, variant }) => theme.typographies[variant]}
`

export { BaseHeading }
