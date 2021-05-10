import React from 'react'

const index = ({ data }) => {
    console.log(data)

    return <div>oi</div>
}

export default index

export function getServerSideProps(ctx) {
    console.log(ctx.params.id)
    const data = { teste: 'oi' }

    return {
        props: data
    }
}
