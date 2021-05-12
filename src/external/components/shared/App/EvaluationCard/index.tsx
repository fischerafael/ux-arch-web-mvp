import React, { useState } from 'react'
import { IProject } from '../../../../../entities/Project'
import { theme } from '../../../../styles/theme'
import { Image } from '../../../design-system/display'
import { FlexContainer, GridContainer } from '../../../design-system/layout'
import { Paragraph, SubTitle, Title } from '../../../design-system/typography'
import { EvaluationOptions } from './EvaluationOptions'
import { Steps } from './EvaluationOptions/Steps'

interface Props {
    project: IProject
}

export const EvaluationCard = ({ project }: Props) => {
    const totalPages = 5
    const [page, setPage] = useState(1)

    return (
        <FlexContainer
            style={{
                flexDirection: 'column',
                width: '100%',
                maxWidth: `${theme.width.sm}`,
                padding: '1rem'
            }}
        >
            <Image
                src={project.thumbnail}
                style={{
                    width: '100%',
                    height: '35vh',
                    objectFit: 'cover'
                }}
            />

            <Steps currentPage={page} pages={totalPages} />

            <FlexContainer
                style={{
                    width: '100%',
                    flexDirection: 'column',
                    justifyContent: 'flex-start'
                }}
            >
                <EvaluationOptions setPage={setPage} page={page} />
            </FlexContainer>
        </FlexContainer>
    )
}
