import styled from 'styled-components'

export const FlexContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`
export const GridContainer = styled.section`
    display: grid;
    grid-template-columns: 1fr;
    grid-gap: 1rem;
`
export const FourGridContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 1rem;
`
export const ThreeGridContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 1rem;
`
export const OneThreeGridContainer = styled.div`
    display: grid;
    grid-template-columns: 1fr 3fr;
    gap: 1rem;
`
export const OneThreeGridTemplate = styled.div`
    display: grid;
    grid-template-columns: 1fr 3fr;
`
