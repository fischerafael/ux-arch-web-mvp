import React from 'react'
import { FlexContainer } from '../../../../components/design-system/layout'
import {
    SecondaryTitle,
    SubTitle
} from '../../../../components/design-system/typography'
import { theme } from '../../../../styles/theme'

export const SideBarProfile = () => {
    return (
        <FlexContainer
            as="section"
            style={{
                width: '100%',
                minHeight: '20vh',
                justifyContent: 'space-between'
            }}
        >
            <FlexContainer
                as="img"
                src="https://avatars.githubusercontent.com/u/47259718?v=4"
                alt="Rafael Fischer"
                style={{
                    maxWidth: '4rem',
                    borderRadius: '2rem',
                    border: `.2rem solid ${theme.colors.contrast}`
                }}
            />

            <FlexContainer
                style={{
                    flexDirection: 'column',
                    alignItems: 'flex-start'
                }}
            >
                <SecondaryTitle>Olá,</SecondaryTitle>
                <SubTitle style={{ fontSize: '1rem' }}>Rafael Fischer</SubTitle>
            </FlexContainer>
        </FlexContainer>
    )
}
