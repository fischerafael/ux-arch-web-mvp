import React, { ReactNode } from 'react'
import styled from 'styled-components'

import { Image } from '../../../design-system/display'
import { FlexContainer, GridContainer } from '../../../design-system/layout'

import { BreadCrumb } from '../BreadCrumb'

interface Props {
    children: ReactNode
}

export const MainSection = ({ children }: Props) => {
    return (
        <FlexContainer
            as="section"
            style={{
                flexDirection: 'column',
                justifyContent: 'flex-start'
            }}
        >
            <FlexContainer
                style={{
                    height: '20%',
                    width: '100%',
                    justifyContent: 'flex-end'
                }}
            >
                <Image src="/assets/icons/exit.svg" />
            </FlexContainer>

            <BreadCrumb />

            <MainSectionContainer
                style={{
                    gap: '1rem',
                    width: '100%',
                    height: '70%',
                    overflowY: 'scroll'
                }}
            >
                {children}
            </MainSectionContainer>
        </FlexContainer>
    )
}

const MainSectionContainer = styled(GridContainer)`
    grid-template-columns: repeat(auto-fill, minmax(15rem, 1fr));
`
