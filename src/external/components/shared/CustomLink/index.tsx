import React from 'react'
import Link from 'next/link'

export const CustomLink = ({ href, children }) => {
    return (
        <Link href={href}>
            <a style={{ textDecoration: 'none' }}>{children}</a>
        </Link>
    )
}
