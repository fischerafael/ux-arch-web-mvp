import React from 'react'
import { IProject } from '../../../../../../entities/Project'
import { Image } from '../../../../../components/design-system/display'
import { FlexContainer } from '../../../../../components/design-system/layout'
import { AppContainer } from '../../../../../components/design-system/templates'
import {
    SubTitle,
    Title
} from '../../../../../components/design-system/typography'
import { EvaluationCard } from '../../../../../components/shared/App/EvaluationCard'
import { MainSection } from '../../../../../components/shared/App/MainSection'
import { SideBar } from '../../../../../components/shared/App/SideBar'

interface Props {
    project: IProject
}

export const EvaluatedProject = ({ project }: Props) => {
    return (
        <AppContainer as="main" style={{ padding: '1rem', minHeight: '100vh' }}>
            <SideBar />
            <MainSection single>
                <EvaluationCard project={project} />
            </MainSection>
        </AppContainer>
    )
}
