import styled from 'styled-components'

export const Title = styled.h1`
    font-size: 3rem;
`
export const SubTitle = styled.h2`
    font-size: 2rem;
`
export const SecondaryTitle = styled.h3`
    font-weight: normal;
    font-size: 1rem;
`
export const Paragraph = styled.p`
    font-size: 0.75rem;
`
export const AnchorText = styled.a`
    font-weight: normal;
    font-size: 0.75rem;
    text-decoration: none;
    cursor: pointer;
    &:hover {
        color: ${(props) => props.theme.colors.primary};
    }
`
