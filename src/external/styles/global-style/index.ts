import { createGlobalStyle, css } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  ${() => resetCSS}
`

const resetCSS = css`
    *,
    html,
    body {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Poppins', Arial, Helvetica, sans-serif;
        font-size: 16px;
        color: ${(props) => props.theme.colors.contrast};
    }
    button {
        display: flex;
        align-items: center;
        justify-content: center;
        outline: none;
        cursor: pointer;
        border: none;
        padding: 0 2rem;
        height: 2.5rem;
        font-weight: bold;
        font-size: 0.75rem;
        transition: 0.5s;
        &:hover {
            filter: grayscale(100);
        }
    }
`
