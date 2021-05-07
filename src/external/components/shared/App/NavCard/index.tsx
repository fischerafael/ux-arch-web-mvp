import React from 'react'
import { theme } from '../../../../styles/theme'
import { Image } from '../../../design-system/display'
import { FlexContainer } from '../../../design-system/layout'
import { Paragraph, SubTitle } from '../../../design-system/typography'
import { CustomLink } from '../../CustomLink'

export const NavCard = ({ href, src, title, description }) => {
    return (
        <CustomLink href={href}>
            <FlexContainer
                as="article"
                style={{
                    flexDirection: 'column',
                    justifyContent: 'flex-start',
                    background: `${theme.colors.background}`,
                    height: '40vh',
                    cursor: 'pointer',
                    gap: '2rem'
                }}
            >
                <FlexContainer
                    style={{
                        padding: '0 2rem',
                        height: '50%',
                        gap: '1rem',
                        justifyContent: 'flex-start',
                        alignItems: 'flex-end',
                        width: '100%'
                    }}
                >
                    <Image
                        src={src}
                        style={{ height: '2rem', width: '2rem' }}
                    />
                    <SubTitle style={{ fontSize: '1rem' }}>{title}</SubTitle>
                </FlexContainer>

                <FlexContainer
                    style={{
                        padding: '0 2rem',
                        height: '50%',
                        alignItems: 'flex-start'
                    }}
                >
                    <Paragraph>{description}</Paragraph>
                </FlexContainer>
            </FlexContainer>
        </CustomLink>
    )
}
