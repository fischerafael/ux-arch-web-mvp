import React from 'react'
import { theme } from '../../../styles/theme'
import { DefaultButton } from '../../design-system/input'
import { FlexContainer } from '../../design-system/layout'

export const NavBar = () => {
    return (
        <FlexContainer as="header" style={{ padding: '0 1rem' }}>
            <FlexContainer
                as="nav"
                style={{
                    minHeight: '15vh',
                    width: '100%',
                    background: theme.colors.white,
                    maxWidth: theme.width.xl,
                    justifyContent: 'space-between'
                }}
            >
                <FlexContainer
                    as="img"
                    src="/assets/logo/logo-short.svg"
                    alt="logo-ux-arch"
                />

                <DefaultButton>Sair</DefaultButton>
            </FlexContainer>
        </FlexContainer>
    )
}
