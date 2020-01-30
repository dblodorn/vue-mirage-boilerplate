import { injectGlobal } from 'vue-styled-components'
import * as _ from './mixins'
import { spacing, colors } from './theme'

injectGlobal`
  body,
  h1 {
    font-family: 'fff-regular', arial, sans-serif;
  }
  button {
    ${_.buttonStyle};
  }
  input[type="text"] {
    ${_.buttonInit};
    background-color: white;
    height: 3rem;
    padding: 0 1rem;
    margin-right: ${spacing.single_pad};
    font-size: 1.25rem;
    border: 1px dashed ${colors.black};
    display: block;
    white-space: nowrap;
    border-radius: 6px;
    width: 100%;
    max-width: 75rem;
    overflow-x: scroll;
    font-family: SFMono-Regular,Consolas,Liberation Mono,Menlo,monospace;
  }
`
