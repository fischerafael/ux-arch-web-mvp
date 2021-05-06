import React from 'react'
import { theme } from '../../../../../styles/theme'
import { FlexContainer } from '../../../../../components/design-system/layout'
import { Image } from '../../../../../components/design-system/display'
import {
    AnchorText,
    Paragraph,
    Title
} from '../../../../../components/design-system/typography'

export const DashboardNavCard = ({ src, title, description, href }) => {
    return (
        <FlexContainer
            as="article"
            style={{
                background: `${theme.colors.white}`,
                alignItems: 'flex-start',
                flexDirection: 'column',
                padding: '2.5rem',
                cursor: 'pointer',
                borderRadius: '.5rem'
            }}
        >
            <FlexContainer
                style={{
                    width: '100%',
                    justifyContent: 'space-between'
                }}
            >
                <Image src={src} alt={title} style={{ width: '2rem' }} />
                <Title style={{ fontSize: '1.25rem' }}>{title}</Title>
            </FlexContainer>

            <FlexContainer
                style={{
                    paddingTop: '2rem',
                    minHeight: '20vh'
                }}
            >
                <Paragraph>{description}</Paragraph>
            </FlexContainer>

            <FlexContainer
                style={{
                    justifyContent: 'flex-end',
                    width: '100%',
                    paddingTop: '2rem'
                }}
            >
                <AnchorText
                    href={href}
                    style={{
                        fontWeight: 'bold',
                        color: `${theme.colors.primary}`
                    }}
                >
                    Saiba Mais
                </AnchorText>
            </FlexContainer>
        </FlexContainer>
    )
}
