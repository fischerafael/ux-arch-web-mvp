import React from 'react'
import { FourGridContainer } from '../../components/design-system/layout'
import { SideBar } from './SideBar'

export const Dashboard = () => {
    return (
        <FourGridContainer as="main" style={{ minHeight: '100vh' }}>
            <SideBar />
        </FourGridContainer>
    )
}
