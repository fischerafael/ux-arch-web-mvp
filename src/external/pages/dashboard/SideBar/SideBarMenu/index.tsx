import React from 'react'
import {
    GhostButton,
    OutlineButton
} from '../../../../components/design-system/input'
import { FlexContainer } from '../../../../components/design-system/layout'
import { SideBarAnchorText } from './SideBarAnchorText'

export const SideBarMenu = () => {
    return (
        <FlexContainer
            as="section"
            style={{
                width: '100%',
                minHeight: '60vh',
                justifyContent: 'flex-start',
                alignItems: 'flex-start',
                flexDirection: 'column'
            }}
        >
            <SideBarAnchorText
                src="/assets/icons/sidebar/atmosphere.svg"
                alt="atmosferas"
            >
                Atmosferas
            </SideBarAnchorText>
            <SideBarAnchorText
                src="/assets/icons/sidebar/projects.svg"
                alt="atmosferas"
            >
                Projetos
            </SideBarAnchorText>
            <SideBarAnchorText
                src="/assets/icons/sidebar/config.svg"
                alt="atmosferas"
            >
                Configurações
            </SideBarAnchorText>
            <SideBarAnchorText
                src="/assets/icons/sidebar/exit.svg"
                alt="atmosferas"
            >
                Sair
            </SideBarAnchorText>
        </FlexContainer>
    )
}
