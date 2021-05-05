import React from 'react'
import { FlexContainer } from '../../../components/design-system/layout'
import { SideBarProfile } from './SideBarProfile'
import { SideBarHeader } from './SideBarHeader'
import { SideBarMenu } from './SideBarMenu'

export const SideBar = () => {
    return (
        <FlexContainer
            as="aside"
            style={{
                alignItems: 'flex-start',
                justifyContent: 'flex-start',
                flexDirection: 'column'
            }}
        >
            <SideBarHeader />
            <SideBarProfile />
            <SideBarMenu />
        </FlexContainer>
    )
}
