import React, { Component } from 'react'
import Banner from '../Home/Banner'
import OurMission from '../Home/OurMission'
import FeaturedStories from '../Home/FeaturedStories'
import AnimatedStats from '../Home/AnimatedState'

export default class HomeLayouts extends Component {
    render() {
        return (
            <div>
                <Banner />

                <OurMission />

                <FeaturedStories />

                <AnimatedStats />
            </div>
        )
    }
}
