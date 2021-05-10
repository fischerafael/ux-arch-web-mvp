import React from 'react'
import styled from 'styled-components'
import { FlexContainer, GridContainer } from '../../../../design-system/layout'
import { Paragraph } from '../../../../design-system/typography'

export const EvaluationOptions = () => {
    return (
        <EvaluationOptionsContainer>
            <FlexContainer
                style={{
                    flexDirection: 'column',
                    justifyContent: 'flex-start',
                    alignItems: 'flex-start'
                }}
            >
                <Paragraph style={{ fontSize: '.5rem', padding: '0.5rem 0' }}>
                    Perigo
                </Paragraph>
                <CategoryOptionsContainer>
                    <FlexContainer
                        style={{
                            flexDirection: 'column',
                            background: 'lightgrey',
                            padding: '1rem 0',
                            cursor: 'pointer'
                        }}
                    >
                        😬
                        <Paragraph as="label" style={{ fontSize: '.5rem' }}>
                            <input value="1" type="radio" />
                            Tenso
                        </Paragraph>
                    </FlexContainer>
                    <label>
                        <Paragraph style={{ fontSize: '.5rem' }}>
                            Nervoso
                        </Paragraph>
                        <input name="atmosphere" type="radio" />
                    </label>
                    <label>
                        <Paragraph style={{ fontSize: '.5rem' }}>
                            Estressado
                        </Paragraph>
                        <input name="atmosphere" type="radio" />
                    </label>
                    <label>
                        <Paragraph style={{ fontSize: '.5rem' }}>
                            Chateado
                        </Paragraph>
                        <input name="atmosphere" type="radio" />
                    </label>
                </CategoryOptionsContainer>
            </FlexContainer>
        </EvaluationOptionsContainer>
    )
}

const EvaluationOptionsContainer = styled(GridContainer)`
    grid-template-columns: 1fr 1fr;
    width: 100%;
`
const CategoryOptionsContainer = styled(GridContainer)`
    grid-template-columns: 1fr 1fr;
    width: 100%;
`
