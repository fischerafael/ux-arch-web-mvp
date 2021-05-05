import React from 'react'
import { theme } from '../../../styles/theme'
import { FourGridContainer } from '../../design-system/layout'
import { SideMenu } from '../SideMenu'

export const DashboardBody = () => {
    return (
        <FourGridContainer
            as="main"
            style={{
                padding: '1rem',
                background: theme.colors.background,
                minHeight: '85vh',
                alignItems: 'flex-start'
            }}
        >
            <SideMenu />
        </FourGridContainer>
    )
}
