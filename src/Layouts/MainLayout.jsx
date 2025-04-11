import React, { Component } from 'react'
import NavBar from '../Fixed_Components/NavBar'
import Footer from '../Fixed_Components/Footer'
import { Outlet } from 'react-router-dom'

export default class MainLayout extends Component {
    render() {
        return (
            <div>
                <NavBar />

                <div className='max-w-7xl mx-auto'>
                    <Outlet />
                </div>

                <Footer />

            </div>
        )
    }
}
