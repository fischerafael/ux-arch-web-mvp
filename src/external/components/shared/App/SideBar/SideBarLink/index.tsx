import React from 'react'
import styled from 'styled-components'
import { theme } from '../../../../../styles/theme'
import { Image } from '../../../../design-system/display'
import { GridContainer } from '../../../../design-system/layout'
import { AnchorText } from '../../../../design-system/typography'

export const SideBarLink = ({ src, href, title }) => {
    return (
        <SideBarLinkContainer>
            <Image src={src} style={{ justifySelf: 'center' }} />
            <SideBarLinkAnchorText>{title}</SideBarLinkAnchorText>
        </SideBarLinkContainer>
    )
}

const SideBarLinkContainer = styled(GridContainer)`
    grid-template-columns: 1fr 3fr;
    width: 100%;
    cursor: pointer;
    transition: 0.5s;
    padding: 1rem 0;

    &:hover {
        background: ${theme.colors.background};
    }

    @media (max-width: ${theme.width.md}) {
        grid-template-columns: 1fr;
        padding: 0.75rem 0;
    }
`
const SideBarLinkAnchorText = styled(AnchorText)`
    @media (max-width: ${theme.width.md}) {
        text-align: center;
        font-size: 0.65rem;
    }
`
