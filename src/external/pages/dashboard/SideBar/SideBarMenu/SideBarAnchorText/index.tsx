import React from 'react'
import {
    FlexContainer,
    OneThreeGridContainer
} from '../../../../../components/design-system/layout'
import { AnchorText } from '../../../../../components/design-system/typography'

export const SideBarAnchorText = ({ src, alt, children }) => {
    return (
        <OneThreeGridContainer
            style={{ width: '100%', padding: '1rem 0', cursor: 'pointer' }}
        >
            <FlexContainer>
                <FlexContainer as="img" src={src} alt={alt} />
            </FlexContainer>

            <AnchorText href="#">{children}</AnchorText>
        </OneThreeGridContainer>
    )
}
