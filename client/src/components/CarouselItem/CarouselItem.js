import React from "react";

const CarouselItem = (props) => (
  <div class="carousel-item active">
    <img class="d-block w-100" src={props.image} alt="First slide"/>
  </div>
)

export default CarouselItem;