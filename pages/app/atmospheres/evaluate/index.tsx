import React from 'react'
import { EvaluatePage } from '../../../../src/external/pages/app/atmospheres/evaluate'
import { api } from '../../../../src/use-cases/config'

const index = ({ data }) => {
    return <EvaluatePage projects={data} />
}

export default index

export async function getServerSideProps() {
    const { data } = await api.get('/projects')

    return {
        props: {
            data
        }
    }
}
