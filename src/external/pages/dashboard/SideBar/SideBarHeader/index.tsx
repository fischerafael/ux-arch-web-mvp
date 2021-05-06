import React from 'react'
import { FlexContainer } from '../../../../components/design-system/layout'

export const SideBarHeader = () => {
    return (
        <FlexContainer
            as="section"
            style={{
                width: '100%',
                minHeight: '20vh',
                justifyContent: 'flex-start',
                padding: '0 1rem'
            }}
        >
            <FlexContainer
                as="img"
                src="/assets/logo/logo-short.svg"
                alt="Logo UX Arch"
            />
        </FlexContainer>
    )
}
