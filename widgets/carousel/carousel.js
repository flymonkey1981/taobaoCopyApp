import React, {Component, useState} from 'react';
import {connect} from 'react-redux';
import {StyleSheet, Text, View} from 'react-native';
import {ENTRIES1, ENTRIES2} from "./entries";
import {itemWidth, sliderWidth} from "./sliderentry.style";
import SliderEntry from "./SliderEntry";
import styles,{ colors } from './index.style';
import Carousel from "react-native-snap-carousel/src/carousel/Carousel";
import Pagination from "react-native-snap-carousel/src/pagination/Pagination";


const localStyles = StyleSheet.create({

    container: {
        flex: 1,



    },



});

const SLIDER_1_FIRST_ITEM = 1;

const TaoBaoCarousel = (props) => {

    const [slider1ActiveSlide, setSliderActiveSlide] = useState(SLIDER_1_FIRST_ITEM);
    let _slider1Ref = null;
    const _renderItem = ({item, index}) => {
        console.log('renderItem');
        return <SliderEntry data={item} even={(index + 1) % 2 === 0}/>;
    };

    const _renderItemWithParallax = ({item, index}, parallaxProps) => {
        return (
            <SliderEntry
                data={item}
                even={(index + 1) % 2 === 0}
                parallax={true}
                parallaxProps={parallaxProps}
            />
        );
    };



    return (
        <View style={localStyles.container}>
            <Carousel
                ref={c => _slider1Ref = c}
                data={ENTRIES1}
                renderItem={_renderItemWithParallax}
                sliderWidth={sliderWidth}
                itemWidth={itemWidth}
                hasParallaxImages={true}
                firstItem={SLIDER_1_FIRST_ITEM}
                inactiveSlideScale={0.94}
                inactiveSlideOpacity={0.7}
                // inactiveSlideShift={20}
                containerCustomStyle={styles.slider}
                contentContainerCustomStyle={styles.sliderContentContainer}
                loop={true}
                loopClonesPerSide={2}
                autoplay={true}
                autoplayDelay={500}
                autoplayInterval={3000}
                onSnapToItem={(index) => setSliderActiveSlide(index)}
            />
            <Pagination
                dotsLength={ENTRIES1.length}
                activeDotIndex={slider1ActiveSlide}
                containerStyle={styles.paginationContainer}
                dotColor={'rgba(255, 255, 255, 0.92)'}
                dotStyle={styles.paginationDot}
                inactiveDotColor={colors.black}
                inactiveDotOpacity={0.4}
                inactiveDotScale={0.6}
                carouselRef={_slider1Ref}
                tappableDots={!!_slider1Ref}
            />
        </View>

    );
};


const mapStateToProps = state => {
    return {
        ...state

    };
};

const mapDispatchToProps = dispatch => {
    return {};
};


export default connect(mapStateToProps, mapDispatchToProps)(TaoBaoCarousel);
