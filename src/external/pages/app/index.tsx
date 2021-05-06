import React from 'react'
import { Image } from '../../components/design-system/display'
import {
    FlexContainer,
    GridContainer
} from '../../components/design-system/layout'
import {
    AnchorText,
    Paragraph,
    SubTitle,
    Title
} from '../../components/design-system/typography'
import NavCard from '../../components/shared/App/NavCard'
import { theme } from '../../styles/theme'

export const App = () => {
    return (
        <GridContainer
            as="main"
            style={{
                gridTemplateColumns: '1fr 3fr',
                padding: '1rem',
                minHeight: '100vh'
            }}
        >
            <FlexContainer
                as="aside"
                style={{
                    alignItems: 'flex-start',
                    justifyContent: 'flex-start',
                    flexDirection: 'column'
                }}
            >
                <FlexContainer
                    style={{
                        width: '100%',
                        justifyContent: 'flex-start',
                        height: '20%'
                    }}
                >
                    <Image
                        src="/assets/logo/logo-short.svg"
                        alt="Logo UX Arch"
                    />
                </FlexContainer>

                <GridContainer
                    style={{
                        gridTemplateColumns: '1fr 3fr',
                        height: '20%',
                        width: '100%',
                        alignItems: 'center'
                    }}
                >
                    <Image
                        src="https://avatars.githubusercontent.com/u/47259718?v=4"
                        alt="Rafael Fischer"
                        style={{
                            width: '3rem',
                            borderRadius: '1.5rem',
                            border: `solid .2rem ${theme.colors.contrast}`,
                            justifySelf: 'center'
                        }}
                    />
                    <FlexContainer
                        style={{
                            flexDirection: 'column',
                            alignItems: 'flex-start'
                        }}
                    >
                        <SubTitle
                            style={{ fontSize: '1rem', fontWeight: 'normal' }}
                        >
                            Olá,
                        </SubTitle>
                        <Title style={{ fontSize: '1rem' }}>
                            Rafael Fischer
                        </Title>
                    </FlexContainer>
                </GridContainer>

                <FlexContainer
                    as="nav"
                    style={{
                        height: '60%',
                        width: '100%',
                        flexDirection: 'column',
                        justifyContent: 'flex-start',
                        alignItems: 'flex-start',
                        gap: '1rem'
                    }}
                >
                    <GridContainer
                        style={{
                            gridTemplateColumns: '1fr 3fr',
                            width: '100%'
                        }}
                    >
                        <Image
                            src="/assets/icons/atmosphere.svg"
                            style={{ justifySelf: 'center' }}
                        />
                        <AnchorText>Atmosferas</AnchorText>
                    </GridContainer>

                    <GridContainer
                        style={{
                            gridTemplateColumns: '1fr 3fr',
                            width: '100%'
                        }}
                    >
                        <Image
                            src="/assets/icons/exit.svg"
                            style={{ justifySelf: 'center' }}
                        />
                        <AnchorText>Sair</AnchorText>
                    </GridContainer>
                </FlexContainer>
            </FlexContainer>
            <FlexContainer
                as="section"
                style={{
                    flexDirection: 'column',
                    justifyContent: 'flex-start'
                }}
            >
                <FlexContainer
                    style={{
                        height: '20%',
                        width: '100%',
                        justifyContent: 'flex-end'
                    }}
                >
                    <Image src="/assets/icons/exit.svg" />
                </FlexContainer>

                <FlexContainer
                    style={{
                        height: '10%',
                        width: '100%',
                        justifyContent: 'flex-start',
                        gap: '.5rem'
                    }}
                >
                    <AnchorText>
                        <Image
                            src="/assets/icons/arrow-right.svg"
                            style={{ height: '.5rem' }}
                        />
                    </AnchorText>
                    <AnchorText>Atmosferas</AnchorText>
                </FlexContainer>

                <GridContainer
                    style={{
                        gridTemplateColumns: '1fr 1fr 1fr',
                        gap: '1rem',
                        width: '100%',
                        height: '70%',
                        overflowY: 'scroll'
                    }}
                >
                    <NavCard />
                    <NavCard />
                    <NavCard />
                    <NavCard />
                    <NavCard />
                </GridContainer>
            </FlexContainer>
        </GridContainer>
    )
}
