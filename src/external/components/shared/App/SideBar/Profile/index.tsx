import React from 'react'
import { theme } from '../../../../../styles/theme'
import { Image } from '../../../../design-system/display'
import { FlexContainer, GridContainer } from '../../../../design-system/layout'
import { SubTitle, Title } from '../../../../design-system/typography'

export const Profile = () => {
    return (
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
                <SubTitle style={{ fontSize: '1rem', fontWeight: 'normal' }}>
                    Olá,
                </SubTitle>
                <Title style={{ fontSize: '1rem' }}>Rafael Fischer</Title>
            </FlexContainer>
        </GridContainer>
    )
}
