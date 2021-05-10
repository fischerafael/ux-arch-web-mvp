import React from 'react'
import { IProject } from '../../../../../entities/Project'

import { AppContainer } from '../../../../components/design-system/templates'
import { MainSection } from '../../../../components/shared/App/MainSection'
import { SideBar } from '../../../../components/shared/App/SideBar'
import { EvaluateProjectCard } from '../../../../components/shared/ProjectCard'

interface Props {
    projects: IProject[]
}

export const EvaluatePage = ({ projects }: Props) => {
    return (
        <AppContainer as="main" style={{ padding: '1rem', minHeight: '100vh' }}>
            <SideBar />
            <MainSection>
                {projects.map((project) => (
                    <EvaluateProjectCard key={project.id} project={project} />
                ))}
            </MainSection>
        </AppContainer>
    )
}
