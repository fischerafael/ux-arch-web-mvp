import React from 'react'
import { IProject } from '../../../../../entities/Project'
import { Image } from '../../../../components/design-system/display'
import { FlexContainer } from '../../../../components/design-system/layout'
import { AppContainer } from '../../../../components/design-system/templates'
import {
    AnchorText,
    Paragraph,
    SubTitle
} from '../../../../components/design-system/typography'
import { MainSection } from '../../../../components/shared/App/MainSection'
import { NavCard } from '../../../../components/shared/App/NavCard'
import { SideBar } from '../../../../components/shared/App/SideBar'
import { theme } from '../../../../styles/theme'

interface Props {
    projects: IProject[]
}

export const EvaluatePage = ({ projects }: Props) => {
    return (
        <AppContainer as="main" style={{ padding: '1rem', minHeight: '100vh' }}>
            <SideBar />
            <MainSection>
                {projects.map((project) => (
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
                ))}
            </MainSection>
        </AppContainer>
    )
}
