import React from 'react'

import { Image } from '../../../design-system/display'
import { FlexContainer, GridContainer } from '../../../design-system/layout'
import { AnchorText } from '../../../design-system/typography'
import { Profile } from './Profile'

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
                    alignItems: 'flex-start',
                    gap: '1rem'
                }}
            >
                <GridContainer
                    style={{
                        gridTemplateColumns: '1fr 3fr',
                        width: '100%'
                    }}
                >
                    <Image
                        src="/assets/icons/atmosphere.svg"
                        style={{ justifySelf: 'center' }}
                    />
                    <AnchorText>Atmosferas</AnchorText>
                </GridContainer>

                <GridContainer
                    style={{
                        gridTemplateColumns: '1fr 3fr',
                        width: '100%'
                    }}
                >
                    <Image
                        src="/assets/icons/exit.svg"
                        style={{ justifySelf: 'center' }}
                    />
                    <AnchorText>Sair</AnchorText>
                </GridContainer>
            </FlexContainer>
        </FlexContainer>
    )
}
