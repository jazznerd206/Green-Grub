import React from 'react'
import {Slider, Slide, Caption} from "react-materialize"

export default function GrubHeader() {
    return (
        <div className="hero">
            <Slider
            className="hero-slider"
            fullscreen={false}
            options={{
                duration: 500,
                height: 400,
                indicators: true,
                interval: 6000
            }}
            >
            <Slide image={<img alt="" src="/images/BLueberry.JPG"/>}>
                <Caption placement="center">
                <h3>
                    Big taste, bigger reward.
                </h3>
                <h5 className="light grey-text text-lighten-3">
                    Here's to your health.
                </h5>
                </Caption>
            </Slide>
            <Slide image={<img alt="" src=""/>}>
                <Caption placement="left">
                <h3>
                    Left Aligned Caption
                </h3>
                <h5 className="light grey-text text-lighten-3">
                    Here's our small slogan.
                </h5>
                </Caption>
            </Slide>
            <Slide image={<img alt="" src=""/>}>
                <Caption placement="right">
                <h3>
                    Right Aligned Caption
                </h3>
                <h5 className="light grey-text text-lighten-3">
                    Here's our small slogan.
                </h5>
                </Caption>
            </Slide>
            <Slide image={<img alt="" src=""/>}>
                <Caption placement="center">
                <h3>
                    This is our big Tagline!
                </h3>
                <h5 className="light grey-text text-lighten-3">
                    Here's our small slogan.
                </h5>
                </Caption>
            </Slide>
            </Slider>
        </div>
    )
}
