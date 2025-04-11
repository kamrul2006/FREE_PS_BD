import React, { Component } from 'react'
import Banner from '../Home/Banner'
import OurMission from '../Home/OurMission'
import FeaturedStories from '../Home/FeaturedStories'

export default class HomeLayouts extends Component {
    render() {
        return (
            <div>
                <Banner />

                <OurMission />

                <FeaturedStories/>
            </div>
        )
    }
}
