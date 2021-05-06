import React from 'react'
import styled from 'styled-components'

import { FlexContainer } from '../../../components/design-system/layout'
import { theme } from '../../../styles/theme'
import { MainContentBody } from './MainContentBody'

export const MainContent = () => {
    return (
        <MainContentContainer
            as="section"
            style={{
                padding: '1rem',
                flexDirection: 'column',
                background: `${theme.colors.background}`,
                minHeight: '100vh',
                justifyContent: 'flex-start'
            }}
        >
            <MainContentBody />
        </MainContentContainer>
    )
}

const MainContentContainer = styled(FlexContainer)`
    z-index: 1;
`
