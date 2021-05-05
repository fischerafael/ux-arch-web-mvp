import styled from 'styled-components'

export const FlexContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`
export const FourGridContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 2rem;
`
export const OneThreeGridContainer = styled.div`
    display: grid;
    grid-template-columns: 1fr 2fr;
    gap: 1rem;
`
