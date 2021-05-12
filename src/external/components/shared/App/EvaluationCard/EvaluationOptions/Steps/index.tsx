import React from 'react'
import { theme } from '../../../../../../styles/theme'
import { FlexContainer } from '../../../../../design-system/layout'
import { Paragraph } from '../../../../../design-system/typography'

export const Steps = ({ pages, currentPage }) => {
    const percentage = (currentPage / (pages + 1)) * 100

    return (
        <FlexContainer
            style={{
                width: '100%',
                height: '.5rem',
                marginTop: '1rem',
                gap: '1rem'
            }}
        >
            <Paragraph>{percentage.toFixed(0)}%</Paragraph>
            <FlexContainer
                style={{
                    background: `${theme.colors.background}`,
                    width: '100%',
                    height: '.5rem',
                    borderRadius: '.25rem',
                    position: 'relative'
                }}
            >
                <FlexContainer
                    style={{
                        background: `${theme.colors.primary}`,
                        width: `${percentage}%`,
                        height: '100%',
                        borderRadius: '.25rem',
                        transition: '0.5s',
                        position: 'absolute',
                        top: '0',
                        left: '0'
                    }}
                />
            </FlexContainer>
            <Paragraph>100%</Paragraph>
        </FlexContainer>
    )
}
