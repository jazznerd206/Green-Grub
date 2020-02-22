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
            <Slide image={<img alt="" src="https://images.unsplash.com/photo-1490818387583-1baba5e638af?ixlib=rb-1.2.1&dpr=2&auto=format&fit=crop&w=416&h=312&q=60"/>}>
                <Caption placement="center">
                <h3 className="light grey-text text-darken-3">
                    Big taste, bigger reward.
                </h3>
                <h5 className="light grey-text text-darken-3">
                    Here's to your health!
                </h5>
                </Caption>
            </Slide>
            <Slide image={<img alt="" src="https://images.unsplash.com/photo-1498837167922-ddd27525d352?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=60"/>}>
                <Caption placement="left">
                <h3 className="light grey-text text-lighten-3">
                    Healthy can be delicious.
                </h3>
                <h5 className="light grey-text text-lighten-3">
                    No compromise, full flavor.
                </h5>
                </Caption>
            </Slide>
            <Slide image={<img alt="" src="https://images.unsplash.com/photo-1484723091739-30a097e8f929?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=60"/>}>
                <Caption placement="right">
                <h3>
                    Hungry? Search for a recipe.
                </h3>
                <h5 className="light grey-text text-lighten-3">
                    Still hungry? Check your saved recipes for another idea...
                </h5>
                </Caption>
            </Slide>
            <Slide image={<img alt="" src="https://images.unsplash.com/photo-1543362906-acfc16c67564?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=60"/>}>
                <Caption placement="center">
                <h3>
                    Feed your body, feed your mind!
                </h3>
                <h5 className="light grey-text text-lighten-3">
                    Diet:Physical Health :: Knowledge:Mental Health
                </h5>
                </Caption>
            </Slide>
            </Slider>
        </div>
    )
}
