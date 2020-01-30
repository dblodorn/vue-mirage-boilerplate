import { css } from 'vue-styled-components'
import { breakpoints, fonts, colors } from './theme'
import chroma from 'chroma-js'

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

// FLEX LAYOUT
export const flexColumn = css`
  display: flex;
  flex-direction: column;
`
export const flexColumnCentered = css`
  ${flexColumn};
  align-items: center;
`

export const flexRow = css`
  display: flex;
  flex-direction: row;
`

export const flexRowWrap = css`
  ${flexRow};
  flex-wrap: wrap;
`

export const flexRowCenteredVert = css`
  ${flexRow};
  align-items: center;
`

export const flexRowCenteredAll = css`
  ${flexRowCenteredVert};
  justify-content: center;
`

export const flexRowSpaceBetween = css`
  ${flexRow};
  justify-content: space-between;
`

// TYPOGRAPHY
export const sansFont = css`
  font-family: ${fonts.sans};
  font-weight: 700;
  text-transform: lowercase;
`

export const bigType = css`
  font-size: ${fonts.sizes.lg};
  font-family: ${fonts.sans};
  line-height: 1.1;
  font-weight: bold;
  word-spacing: .5vmin;
  letter-spacing: .125vmin;
  margin-bottom: 3vmin;
  display: block;
  position: relative;
  ${media.small`
    font-size: 3.5rem;
    margin: 3.5rem 0;
  `}
`

export const lgBodyCopy = css`
  font-size: ${fonts.sizes.med_lg};
  font-family: ${fonts.sans};
  font-weight: 500;
  line-height: 1.35;
`

export const mediumType = css`
  font-size: ${fonts.sizes.med};
  font-family: ${fonts.sans};
  font-weight: 500;
  line-height: 1.45;
`

export const smallType = css`
  font-size: ${fonts.sizes.sm};
  font-family: ${fonts.sans};
  line-height: .8;
`

export const microType = css`
  font-size: ${fonts.sizes.micro};
  font-family: ${fonts.sans};
  line-height: .8;
  letter-spacing: 1px;
  word-spacing: 2px;
  font-weight: 400;
`

export const linkInit = css`
  -webkit-tap-highlight-color: rgba(255,255,255,0);
  -webkit-appearance: none;
  border: 0;
  background-color: rgba(255,255,255,0);
  text-decoration: none;
  position: relative;
  display: block;
  cursor: pointer;
  &:hover {
    text-decoration: none;
  }
`

export const buttonInit = css`
  ${linkInit};
  border-radius: 0;
  appearance: none;
`

export const buttonStyle = css`
  ${buttonInit};
  ${microType};
  ${flexRowCenteredAll};
  color: ${colors.white};
  text-transform: uppercase;
  height: 3rem;
  background-color: ${chroma(colors.blue).darken(0.2)};
  color: ${colors.white};
  border-radius: 1.5rem;
  will-change: background-color;
  transition: background-color 250ms ease;
  width: 10.5rem;
  text-decoration: none;
  span {
    padding-top: 2px;
  }
  &:hover {
    background-color: ${chroma(colors.blue).darken(1.5)};
  }
  &.active {
    background-color: ${chroma(colors.blue).darken(0.5)};
  }
  ${media.small`
    background-color: ${chroma(colors.blue).darken(1.125)}; 
    width: auto;
    min-width: 10rem;
    padding: 0 1.5rem;
    span {
      padding-top: 2px;
    }
    &.active {
      background-color: ${chroma(colors.blue).darken(1.5)};
    }
  `}
`
