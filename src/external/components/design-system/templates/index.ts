import styled from 'styled-components'
import { theme } from '../../../styles/theme'
import { GridContainer } from '../layout'

export const AppContainer = styled(GridContainer)`
    grid-template-columns: 12rem 3fr;

    @media (max-width: ${theme.width.sm}) {
        grid-template-columns: 4rem 6fr;
    }
`
