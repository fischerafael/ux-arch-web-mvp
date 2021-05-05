import React from 'react'
import { FlexContainer } from '../../../components/design-system/layout'
import { SideBarProfile } from './SideBarProfile'
import { SideBarHeader } from './SideBarHeader'
import { SideBarMenu } from './SideBarMenu'
import { theme } from '../../../styles/theme'

export const SideBar = () => {
    return (
        <FlexContainer
            as="aside"
            style={{
                alignItems: 'flex-start',
                justifyContent: 'flex-start',
                flexDirection: 'column',
                boxShadow: `${theme.shadow.boxShadow}`,
                padding: '0 1rem'
            }}
        >
            <SideBarHeader />
            <SideBarProfile />
            <SideBarMenu />
        </FlexContainer>
    )
}
