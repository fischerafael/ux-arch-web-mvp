import React from 'react'
import styled from 'styled-components'
import { theme } from '../../../../../styles/theme'
import { Image } from '../../../../design-system/display'
import { FlexContainer, GridContainer } from '../../../../design-system/layout'
import { SubTitle, Title } from '../../../../design-system/typography'

export const Profile = () => {
    return (
        <ProfileContainer>
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
            <UserNameContainer
                style={{
                    flexDirection: 'column',
                    alignItems: 'flex-start'
                }}
            >
                <SubTitle style={{ fontSize: '1rem', fontWeight: 'normal' }}>
                    Olá,
                </SubTitle>
                <Title style={{ fontSize: '1rem' }}>Rafael Fischer</Title>
            </UserNameContainer>
        </ProfileContainer>
    )
}

const ProfileContainer = styled(GridContainer)`
    grid-template-columns: 1fr 3fr;
    height: 20%;
    width: 100%;
    align-items: center;
    @media (max-width: ${theme.width.sm}) {
        grid-template-columns: 1fr;
    }
`

const UserNameContainer = styled(FlexContainer)`
    flex-direction: column;
    align-items: flex-start;
    @media (max-width: ${theme.width.sm}) {
        display: none;
    }
`
