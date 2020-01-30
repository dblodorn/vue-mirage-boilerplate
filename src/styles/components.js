import styled from 'vue-styled-components'
import * as _ from './mixins'
import { colors, spacing } from './theme'

export const StyledTitle = styled.h1`
  font-size: 2rem;
  padding-bottom: 1rem;
`

export const H1 = styled.h1`
  ${_.mediumType};
  color: ${colors.blue};
`

export const H1Big = styled.h1`
  ${_.bigType};
  color: ${colors.black};
`

export const H2 = styled.h2`
  ${_.smallType};
  ${_.media.small`
    width: 100%;
    text-align: center;
  `}
`

export const H2Big = styled.h2`
  ${_.mediumType};
`

export const P = styled.p`
  ${_.mediumType};
  padding-bottom: ${spacing.single_pad};
  padding-right: ${spacing.double_pad};
  &:last-child {
    padding-bottom: 0;
  }
`
