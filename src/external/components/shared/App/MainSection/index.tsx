import React from 'react'
import styled from 'styled-components'
import { theme } from '../../../../styles/theme'
import { Image } from '../../../design-system/display'
import { FlexContainer, GridContainer } from '../../../design-system/layout'
import { AnchorText } from '../../../design-system/typography'

export const MainSection = ({ children }) => {
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

            <FlexContainer
                style={{
                    height: '10%',
                    width: '100%',
                    justifyContent: 'flex-start',
                    gap: '.5rem'
                }}
            >
                <AnchorText>
                    <Image
                        src="/assets/icons/arrow-right.svg"
                        style={{ height: '.5rem' }}
                    />
                </AnchorText>
                <AnchorText>Dashboard</AnchorText>
            </FlexContainer>

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
    grid-template-columns: repeat(3, 1fr);

    @media (max-width: ${theme.width.lg}) {
        grid-template-columns: repeat(2, 1fr);
    }

    @media (max-width: ${theme.width.md}) {
        grid-template-columns: 1fr;
    }
`
