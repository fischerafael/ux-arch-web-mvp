import React from 'react'
import styled from 'styled-components'
import { theme } from '../../styles/theme'
import { GridContainer } from '../../components/design-system/layout'

import { MainSection } from '../../components/shared/App/MainSection'
import { NavCard } from '../../components/shared/App/NavCard'
import { SideBar } from '../../components/shared/App/SideBar'

export const App = () => {
    return (
        <AppContainer as="main" style={{ padding: '1rem', minHeight: '100vh' }}>
            <SideBar />
            <MainSection>
                <NavCard
                    href="#"
                    title="Atmosferas"
                    src="/assets/icons/atmosphere.svg"
                    description="Avalie e consulte experiências arquitetônicas de projetos utilizados pelo algoritmo do UX Arch"
                />
            </MainSection>
        </AppContainer>
    )
}

const AppContainer = styled(GridContainer)`
    grid-template-columns: 1fr 3fr;

    @media (max-width: ${theme.width.sm}) {
        grid-template-columns: 1fr 6fr;
    }
`
