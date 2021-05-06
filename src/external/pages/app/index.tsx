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
                    title="Avaliar"
                    src="/assets/icons/evaluate.svg"
                    description="Avalie experiências arquitetônicas de projetos e auxilie o UX Arch a prever as atmosferas com mais precisão"
                />
                <NavCard
                    href="#"
                    title="Consultar"
                    src="/assets/icons/search.svg"
                    description="Confira os projetos e as experiências arquitetônicas utilizadas pelo algoritmo do UX Arch"
                />
            </MainSection>
        </AppContainer>
    )
}

const AppContainer = styled(GridContainer)`
    grid-template-columns: 1fr 3fr;

    @media (max-width: ${theme.width.lg}) {
        grid-template-columns: 1fr 2fr;
    }

    @media (max-width: ${theme.width.md}) {
        grid-template-columns: 1fr 1fr;
    }
`
