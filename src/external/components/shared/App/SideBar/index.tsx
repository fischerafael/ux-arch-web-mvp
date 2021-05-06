import React from 'react'

import { Image } from '../../../design-system/display'
import { FlexContainer } from '../../../design-system/layout'
import { Profile } from './Profile'
import { SideBarLink } from './SideBarLink'

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
            <FlexContainer
                style={{
                    width: '100%',
                    justifyContent: 'flex-start',
                    height: '20%'
                }}
            >
                <Image src="/assets/logo/logo-short.svg" alt="Logo UX Arch" />
            </FlexContainer>

            <Profile />

            <FlexContainer
                as="nav"
                style={{
                    height: '60%',
                    width: '100%',
                    flexDirection: 'column',
                    justifyContent: 'flex-start',
                    alignItems: 'flex-start'
                }}
            >
                <SideBarLink
                    title="Atmosferas"
                    href="/#"
                    src="/assets/icons/atmosphere.svg"
                />

                <SideBarLink
                    title="Sair"
                    href="/#"
                    src="/assets/icons/exit.svg"
                />
            </FlexContainer>
        </FlexContainer>
    )
}
