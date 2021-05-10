import React from 'react'
import { IProject } from '../../../../entities/Project'
import { theme } from '../../../styles/theme'
import { Image } from '../../design-system/display'
import { FlexContainer } from '../../design-system/layout'
import { AnchorText, SubTitle } from '../../design-system/typography'

interface Props {
    project: IProject
}

export const EvaluateProjectCard = ({ project }: Props) => {
    return (
        <FlexContainer
            as="article"
            key={project.id}
            style={{
                flexDirection: 'column',
                justifyContent: 'flex-start',
                alignItems: 'flex-start',
                background: `${theme.colors.background}`,
                height: '17rem',
                cursor: 'pointer'
            }}
        >
            <Image
                src={project.thumbnail}
                style={{
                    height: '10rem',
                    width: '100%',
                    objectFit: 'cover'
                }}
            />

            <FlexContainer
                style={{
                    flexDirection: 'column',
                    width: '100%',
                    alignItems: 'flex-start',
                    gap: '.5rem',
                    padding: '1rem'
                }}
            >
                <SubTitle
                    style={{
                        fontSize: '1rem',
                        lineHeight: '1rem'
                    }}
                >
                    Villa Savoye
                </SubTitle>
                <SubTitle
                    style={{
                        fontSize: '.75rem',
                        lineHeight: '.75rem',
                        fontWeight: 'normal'
                    }}
                >
                    Curitiba, Paraná
                </SubTitle>
                <AnchorText
                    style={{
                        fontSize: '.75rem',
                        paddingTop: '1rem',
                        fontWeight: 'bold',
                        color: `${theme.colors.primary}`
                    }}
                >
                    Avaliar
                </AnchorText>
            </FlexContainer>
        </FlexContainer>
    )
}
