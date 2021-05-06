import styled from 'styled-components'

export const DefaultButton = styled.button`
    background: ${(props) => props.theme.colors.contrast};
    color: ${(props) => props.theme.colors.white};
    &:hover {
        background: ${(props) => props.theme.colors.white};
        color: ${(props) => props.theme.colors.contrast};
    }
`
export const OutlineButton = styled.button`
    border: 0.125rem solid ${(props) => props.theme.colors.contrast};
    background: transparent;
    color: ${(props) => props.theme.colors.contrast};
    &:hover {
        background: ${(props) => props.theme.colors.contrast};
        color: ${(props) => props.theme.colors.white};
    }
`
export const GhostButton = styled.button`
    background: ${(props) => props.theme.colors.white};
    color: ${(props) => props.theme.colors.contrast};
    &:hover {
        background: ${(props) => props.theme.colors.contrast};
        color: ${(props) => props.theme.colors.white};
    }
`
