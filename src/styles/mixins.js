import { css } from 'vue-styled-components'
import { breakpoints } from './theme'

// Media Queries
export const media = {
  small: (...args) => css`
    @media (max-width: 500px) {
      ${css(...args)}
    }
  `,
  tablet: (...args) => css`
    @media (min-width: 501px) {
      ${css(...args)}
    }
  `,
  desktop: (...args) => css`
    @media (min-width: ${breakpoints.desktop}px) {
      ${css(...args)}
    }
  `,
  medium: (...args) => css`
    @media (min-width: ${breakpoints.medium}px) {
      ${css(...args)}
    }
  `,
  big: (...args) => css`
    @media (min-width: ${breakpoints.big}px) {
      ${css(...args)}
    }
  `,
  touch: (...args) => css`
    @media (hover: none) {
      ${css(...args)}
    }
  `,
  hover: (...args) => css`
    @media (hover: hover) {
      ${css(...args)}
    }
  `
}
