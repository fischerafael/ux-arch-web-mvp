import React from 'react'
import { IProject } from '../../../../../src/entities/Project'
import { EvaluatedProject } from '../../../../../src/external/pages/app/atmospheres/evaluate/project'
import { api } from '../../../../../src/use-cases/config'

interface Props {
    data: IProject
}

const index = ({ data }: Props) => {
    return <EvaluatedProject project={data} />
}

export default index

export async function getServerSideProps(ctx) {
    const projectId = ctx.params.id as string
    const { data } = await api.get(`/projects?id=${projectId}`)

    return {
        props: { data: data[0] }
    }
}
