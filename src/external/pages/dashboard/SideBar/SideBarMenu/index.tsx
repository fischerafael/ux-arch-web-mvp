import React from 'react'
import { FlexContainer } from '../../../../components/design-system/layout'

export const SideBarMenu = () => {
    return (
        <FlexContainer
            as="section"
            style={{
                background: 'green',
                width: '100%',
                minHeight: '60vh'
            }}
        >
            Links
        </FlexContainer>
    )
}
