import React from 'react'

import { ThreeGridContainer } from '../../../../components/design-system/layout'

import { DashboardNavCard } from './DashboardNavCard'

export const MainContentBody = () => {
    return (
        <ThreeGridContainer as="nav" style={{ width: '100%', gap: '1rem' }}>
            <DashboardNavCard
                src="/assets/icons/sidebar/atmosphere.svg"
                title="Atmosferas"
                description="Avalie e confira experiências arquitetônicas dos projetos
                referência."
                href="/#"
            />
            <DashboardNavCard
                src="/assets/icons/sidebar/projects.svg"
                title="Projetos"
                description="Crie seus projetos e descubra como os usuáris irão experenciá-los."
                href="/#"
            />
            <DashboardNavCard
                src="/assets/icons/sidebar/config.svg"
                title="Configurações"
                description="Altere dados de sua conta."
                href="/#"
            />
        </ThreeGridContainer>
    )
}
