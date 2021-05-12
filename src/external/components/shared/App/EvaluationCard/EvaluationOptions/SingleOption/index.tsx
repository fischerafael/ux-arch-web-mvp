import React from 'react'
import styled from 'styled-components'
import { theme } from '../../../../../../styles/theme'
import { FlexContainer } from '../../../../../design-system/layout'
import { Paragraph } from '../../../../../design-system/typography'

export const SingleOption = ({ onClick, emoji, title }) => {
    return (
        <SingleOptionContainer onClick={onClick}>
            <Paragraph
                style={{
                    fontWeight: 'bold',
                    fontSize: '1.5rem'
                }}
            >
                {emoji}
            </Paragraph>

            <Paragraph
                style={{
                    fontSize: '.5rem',
                    textAlign: 'center'
                }}
            >
                {title}
            </Paragraph>
        </SingleOptionContainer>
    )
}

const SingleOptionContainer = styled(FlexContainer)`
    width: 100%;
    background: white;
    padding: 0.5rem;
    cursor: pointer;
    flex-direction: column;
    transition: 0.5s;
    &:hover {
        background: ${(props) => props.theme.colors.background};
    }
`
