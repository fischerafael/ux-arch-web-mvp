import React from 'react'
import { FlexContainer } from '../../../components/design-system/layout'
import { SideBarProfile } from './SideBarProfile'
import { SideBarHeader } from './SideBarHeader'
import { SideBarMenu } from './SideBarMenu'
import { theme } from '../../../styles/theme'
import styled from 'styled-components'

export const SideBar = () => {
    return (
        <SideBarContainer
            as="aside"
            style={{
                alignItems: 'flex-start',
                justifyContent: 'flex-start',
                flexDirection: 'column',
                boxShadow: `${theme.shadow.boxShadow}`,
                height: '100%',
                position: 'relative'
            }}
        >
            <FlexContainer
                style={{
                    alignItems: 'flex-start',
                    justifyContent: 'flex-start',
                    flexDirection: 'column',
                    position: 'absolute',
                    width: '100%'
                }}
            >
                <SideBarHeader />
                <SideBarProfile />
                <SideBarMenu />
            </FlexContainer>
        </SideBarContainer>
    )
}

const SideBarContainer = styled(FlexContainer)`
    z-index: 10;
`
