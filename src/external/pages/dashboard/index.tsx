import React from 'react'
import { OneThreeGridTemplate } from '../../components/design-system/layout'
import { MainContent } from './MainContent'
import { SideBar } from './SideBar'

export const Dashboard = () => {
    return (
        <OneThreeGridTemplate
            as="main"
            style={{
                minHeight: '100vh',
                alignItems: 'flex-start'
            }}
        >
            <SideBar />
            <MainContent />
        </OneThreeGridTemplate>
    )
}
