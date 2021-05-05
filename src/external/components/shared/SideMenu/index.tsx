import React from 'react'
import { theme } from '../../../styles/theme'
import { DefaultButton } from '../../design-system/input'
import { FlexContainer } from '../../design-system/layout'
import { AnchorText, SecondaryTitle } from '../../design-system/typography'

export const SideMenu = () => {
    return (
        <FlexContainer as="aside" style={{ flexDirection: 'column' }}>
            <FlexContainer
                as="section"
                style={{
                    flexDirection: 'column',
                    alignItems: 'flex-start',
                    width: '100%'
                }}
            >
                <SecondaryTitle>Olá,</SecondaryTitle>
                <SecondaryTitle style={{ fontWeight: 'bold' }}>
                    Rafael Fischer
                </SecondaryTitle>
            </FlexContainer>

            <br />

            <FlexContainer
                style={{
                    flexDirection: 'column',
                    alignItems: 'flex-start',
                    width: '100%'
                }}
            >
                <SecondaryTitle
                    style={{
                        fontSize: '.5rem',
                        fontWeight: 'bold',
                        padding: '.5rem 0',
                        color: theme.colors.primary
                    }}
                >
                    ATMOSFERAS
                </SecondaryTitle>
                <AnchorText href="#" style={{ padding: '.25rem 0' }}>
                    Avaliar
                </AnchorText>
                <AnchorText href="#" style={{ padding: '.25rem 0' }}>
                    Visualizar
                </AnchorText>

                <SecondaryTitle
                    style={{
                        fontSize: '.5rem',
                        fontWeight: 'bold',
                        padding: '.5rem 0',
                        color: theme.colors.primary
                    }}
                >
                    PROJETAR
                </SecondaryTitle>
                <AnchorText href="#" style={{ padding: '.25rem 0' }}>
                    Referências
                </AnchorText>
                <AnchorText href="#" style={{ padding: '.25rem 0' }}>
                    Estudo Preliminar
                </AnchorText>

                <SecondaryTitle
                    style={{
                        fontSize: '.5rem',
                        fontWeight: 'bold',
                        padding: '.5rem 0',
                        color: theme.colors.primary
                    }}
                >
                    CONFIGURAÇÕES
                </SecondaryTitle>
                <AnchorText href="#" style={{ padding: '.25rem 0' }}>
                    Perfil
                </AnchorText>
                <AnchorText href="#" style={{ padding: '.25rem 0' }}>
                    Sair
                </AnchorText>
            </FlexContainer>
        </FlexContainer>
    )
}
