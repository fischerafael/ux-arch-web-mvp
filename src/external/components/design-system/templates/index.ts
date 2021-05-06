import styled from 'styled-components'
import { theme } from '../../../styles/theme'
import { GridContainer } from '../layout'

export const AppContainer = styled(GridContainer)`
    grid-template-columns: 1fr 3fr;

    @media (max-width: ${theme.width.sm}) {
        grid-template-columns: 1fr 6fr;
    }
`
