import React from 'react'
import { IProject } from '../../../../../../entities/Project'
import { FlexContainer } from '../../../../../components/design-system/layout'
import { EvaluationCard } from '../../../../../components/shared/App/EvaluationCard'

interface Props {
    project: IProject
}

export const EvaluatedProject = ({ project }: Props) => {
    return (
        <FlexContainer
            as="main"
            style={{ minHeight: '100vh', alignItems: 'flex-start' }}
        >
            <EvaluationCard project={project} />
        </FlexContainer>
    )
}
