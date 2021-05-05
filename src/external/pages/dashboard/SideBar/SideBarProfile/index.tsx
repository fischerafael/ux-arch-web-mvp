import React from 'react'
import {
    FlexContainer,
    OneThreeGridContainer
} from '../../../../components/design-system/layout'
import {
    SecondaryTitle,
    SubTitle
} from '../../../../components/design-system/typography'
import { theme } from '../../../../styles/theme'

export const SideBarProfile = () => {
    return (
        <OneThreeGridContainer
            as="section"
            style={{
                width: '100%',
                minHeight: '20vh',
                alignItems: 'center'
            }}
        >
            <FlexContainer>
                <FlexContainer
                    as="img"
                    src="https://avatars.githubusercontent.com/u/47259718?v=4"
                    alt="Rafael Fischer"
                    style={{
                        maxWidth: '3rem',
                        borderRadius: '1.5rem',
                        border: `.2rem solid ${theme.colors.contrast}`
                    }}
                />
            </FlexContainer>

            <FlexContainer
                style={{
                    flexDirection: 'column',
                    alignItems: 'flex-start'
                }}
            >
                <SecondaryTitle>Olá,</SecondaryTitle>
                <SubTitle style={{ fontSize: '1rem' }}>Rafael Fischer</SubTitle>
            </FlexContainer>
        </OneThreeGridContainer>
    )
}
