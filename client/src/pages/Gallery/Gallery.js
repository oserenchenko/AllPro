import React, { Component } from 'react';
import Carousel from "../../components/Carousel";
import CarouselItem from "../../components/CarouselItem";

class Gallery extends Component {

  render () {
    return (
      <div>
      <Carousel category="Kitchen" carouselItem={<CarouselItem image={require("../../images/white_kitchen.jpg")}></CarouselItem>} />
    </div>
    )
  }
}

export default Gallery;