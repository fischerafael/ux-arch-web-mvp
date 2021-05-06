import React from 'react'
import { AppContainer } from '../../components/design-system/templates'

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
