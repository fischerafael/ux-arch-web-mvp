import React from 'react'
import { IProject } from '../../../../../entities/Project'
import { Image } from '../../../design-system/display'
import { FlexContainer, GridContainer } from '../../../design-system/layout'
import { Paragraph, SubTitle, Title } from '../../../design-system/typography'
import { EvaluationOptions } from './EvaluationOptions'

interface Props {
    project: IProject
}

export const EvaluationCard = ({ project }: Props) => {
    return (
        <FlexContainer
            style={{
                flexDirection: 'column',
                justifyContent: 'flex-start'
            }}
        >
            <Image
                src={project.thumbnail}
                style={{
                    width: '100%',
                    height: '50vh',
                    objectFit: 'cover'
                }}
            />

            <FlexContainer style={{ padding: '1rem 0', width: '100%' }}>
                <FlexContainer
                    style={{
                        width: '100%',
                        height: '50vh',
                        maxWidth: '30rem',
                        flexDirection: 'column',
                        justifyContent: 'flex-start'
                    }}
                >
                    <Title
                        style={{
                            padding: '.5rem 0',
                            fontSize: '2rem',
                            alignSelf: 'flex-start'
                        }}
                    >
                        {project.name}
                    </Title>
                    <SubTitle
                        style={{
                            lineHeight: '.75rem',
                            fontWeight: 'normal',
                            fontSize: '1rem',
                            alignSelf: 'flex-start'
                        }}
                    >
                        {project.location}
                    </SubTitle>
                    <SubTitle
                        style={{
                            fontSize: '1rem',
                            paddingTop: '2rem',
                            alignSelf: 'flex-start'
                        }}
                    >
                        Se tivesse que morar nesse lugar, como você se sentiria?
                    </SubTitle>
                    <EvaluationOptions />
                </FlexContainer>
            </FlexContainer>
        </FlexContainer>
    )
}
