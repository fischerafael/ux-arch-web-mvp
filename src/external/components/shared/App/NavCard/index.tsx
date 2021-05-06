import React from 'react'
import { theme } from '../../../../styles/theme'
import { Image } from '../../../design-system/display'
import { FlexContainer } from '../../../design-system/layout'
import { Paragraph, SubTitle } from '../../../design-system/typography'

const NavCard = () => {
    return (
        <FlexContainer
            as="article"
            style={{
                flexDirection: 'column',
                justifyContent: 'flex-start',
                background: `${theme.colors.background}`,
                height: '40vh',
                cursor: 'pointer',
                gap: '2rem'
            }}
        >
            <FlexContainer
                style={{
                    padding: '0 2rem',
                    height: '50%',
                    gap: '1rem',
                    justifyContent: 'flex-start',
                    alignItems: 'flex-end',
                    width: '100%'
                }}
            >
                <Image
                    src="/assets/icons/atmosphere.svg"
                    style={{ height: '2rem' }}
                />
                <SubTitle style={{ fontSize: '1rem' }}>Atmosferas</SubTitle>
                <Paragraph></Paragraph>
            </FlexContainer>

            <FlexContainer
                style={{
                    padding: '0 2rem',
                    height: '50%',
                    alignItems: 'flex-start'
                }}
            >
                <Paragraph>
                    Auxilie o UX Arch a melhor prever como os usuários irão
                    experenciar os espaços que você projeta
                </Paragraph>
            </FlexContainer>
        </FlexContainer>
    )
}

export default NavCard
