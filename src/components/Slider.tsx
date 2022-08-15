import React from 'react';
import {
    Slider,
    SliderTrack,
    SliderFilledTrack,
    SliderThumb,
} from '@chakra-ui/react'

const CustomSlider: React.FC<any> = ({ slider, setSlider }) => {
    return (
        <Slider
            onChange={value => setSlider(value)}
            aria-label='slider-ex-2'
            colorScheme='cyan'
            defaultValue={slider}
            min={1000}
            step={5000}
            max={100000}>
            <SliderTrack>
                <SliderFilledTrack />
            </SliderTrack>
            <SliderThumb />
        </Slider>
    )
}

export default CustomSlider;