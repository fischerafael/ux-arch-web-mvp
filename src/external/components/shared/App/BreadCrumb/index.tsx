import React from 'react'
import { useRouter } from 'next/router'

import { IBreadCrumb } from '../../../../../entities/BreadCrumb'

import { Image } from '../../../design-system/display'
import { FlexContainer } from '../../../design-system/layout'
import { AnchorText } from '../../../design-system/typography'

interface Props {
    breadCrumbLinks?: IBreadCrumb[]
}

export const BreadCrumb = ({ breadCrumbLinks }: Props) => {
    const { pathname, back } = useRouter()

    const links = pathname
        .split('/')
        .filter((link) => link !== '')
        .map((link) => {
            return { title: link }
        })

    const goBack = () => {
        back()
    }

    return (
        <FlexContainer
            style={{
                height: '10%',
                width: '100%',
                justifyContent: 'space-between'
            }}
        >
            <FlexContainer style={{ gap: '.5rem' }}>
                {links.map((link) => (
                    <React.Fragment key={link.title}>
                        <AnchorText>
                            <Image
                                src="/assets/icons/arrow-right.svg"
                                style={{ height: '.5rem' }}
                            />
                        </AnchorText>
                        <AnchorText>{link.title}</AnchorText>
                    </React.Fragment>
                ))}
            </FlexContainer>

            <AnchorText
                style={{ fontWeight: 'bold', transition: '.5s' }}
                onClick={goBack}
            >
                Voltar
            </AnchorText>
        </FlexContainer>
    )
}
