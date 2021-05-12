import React, { useState } from 'react'
import styled from 'styled-components'
import { options } from '../../../../../../entities/App/Evaluation'

import { FlexContainer, GridContainer } from '../../../../design-system/layout'
import { Paragraph } from '../../../../design-system/typography'
import { SingleOption } from './SingleOption'

export const EvaluationOptions = ({ setPage, page }) => {
    const [rest, setRest] = useState(0.5)
    const [work, setWork] = useState(0.5)
    const [study, setStudy] = useState(0.5)
    const [leisure, setLeisure] = useState(0.5)
    const [mandatory, setMandatory] = useState(0.5)

    const evaluationData = {
        rest,
        work,
        study,
        leisure,
        mandatory
    }

    return (
        <FlexContainer style={{ width: '100%', flexDirection: 'column' }}>
            {page === 1 && (
                <>
                    <Paragraph
                        style={{ paddingBottom: '1rem', fontWeight: 'bold' }}
                    >
                        Como se sentiria DESCANSANDO nesse lugar?
                    </Paragraph>
                    <EvaluationGridContainer>
                        {options.map((option) => (
                            <SingleOption
                                key={option.value}
                                emoji={option.emoji}
                                title={option.title}
                                onClick={() => {
                                    setPage((prevState) => prevState + 1)
                                    setRest(option.value)
                                }}
                            />
                        ))}
                    </EvaluationGridContainer>
                </>
            )}

            {page === 2 && (
                <>
                    <Paragraph
                        style={{ paddingBottom: '1rem', fontWeight: 'bold' }}
                    >
                        Como se sentiria TRABALHANDO nesse lugar?
                    </Paragraph>
                    <EvaluationGridContainer>
                        {options.map((option) => (
                            <SingleOption
                                key={option.value}
                                emoji={option.emoji}
                                title={option.title}
                                onClick={() => {
                                    setPage((prevState) => prevState + 1)
                                    setWork(option.value)
                                }}
                            />
                        ))}
                    </EvaluationGridContainer>
                </>
            )}

            {page === 3 && (
                <>
                    <Paragraph
                        style={{ paddingBottom: '1rem', fontWeight: 'bold' }}
                    >
                        Como se sentiria ESTUDANDO nesse lugar?
                    </Paragraph>
                    <EvaluationGridContainer>
                        {options.map((option) => (
                            <SingleOption
                                key={option.value}
                                emoji={option.emoji}
                                title={option.title}
                                onClick={() => {
                                    setPage((prevState) => prevState + 1)
                                    setStudy(option.value)
                                }}
                            />
                        ))}
                    </EvaluationGridContainer>
                </>
            )}

            {page === 4 && (
                <>
                    <Paragraph
                        style={{ paddingBottom: '1rem', fontWeight: 'bold' }}
                    >
                        Como se sentiria fazendo uma atividade de LAZER nesse
                        lugar?
                    </Paragraph>
                    <EvaluationGridContainer>
                        {options.map((option) => (
                            <SingleOption
                                key={option.value}
                                emoji={option.emoji}
                                title={option.title}
                                onClick={() => {
                                    setPage((prevState) => prevState + 1)
                                    setLeisure(option.value)
                                }}
                            />
                        ))}
                    </EvaluationGridContainer>
                </>
            )}

            {page === 5 && (
                <>
                    <Paragraph
                        style={{ paddingBottom: '1rem', fontWeight: 'bold' }}
                    >
                        Como se sentiria SENDO OBRIGADO a ir nesse lugar?
                    </Paragraph>
                    <EvaluationGridContainer>
                        {options.map((option) => (
                            <SingleOption
                                key={option.value}
                                emoji={option.emoji}
                                title={option.title}
                                onClick={() => {
                                    setPage((prevState) => prevState + 1)
                                    setMandatory(option.value)
                                }}
                            />
                        ))}
                    </EvaluationGridContainer>
                </>
            )}
        </FlexContainer>
    )
}

const EvaluationGridContainer = styled(GridContainer)`
    grid-template-columns: 1fr 1fr 1fr 1fr;
    width: 100%;
    gap: 1rem;
`
