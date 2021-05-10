import React from 'react'

import { AppContainer } from '../../../components/design-system/templates'
import { MainSection } from '../../../components/shared/App/MainSection'
import { NavCard } from '../../../components/shared/App/NavCard'
import { SideBar } from '../../../components/shared/App/SideBar'

export const AtmospheresApp = () => {
    return (
        <AppContainer as="main" style={{ padding: '1rem', minHeight: '100vh' }}>
            <SideBar />
            <MainSection>
                <NavCard
                    href="/app/atmospheres/evaluate"
                    title="Avaliar"
                    src="/assets/icons/evaluate.svg"
                    description="Avalie experiências arquitetônicas de projetos utilizados pelo algoritmo do UX Arch"
                />
                <NavCard
                    href="#"
                    title="Consultar"
                    src="/assets/icons/search.svg"
                    description="Consulte experiências arquitetônicas de projetos utilizados pelo algoritmo do UX Arch"
                />
            </MainSection>
        </AppContainer>
    )
}
