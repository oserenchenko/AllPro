import React from "react";

const GalleryCategory = () => (
<div id="carouselExampleSlidesOnly" className="carousel slide" data-ride="carousel">
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img className="d-block w-100" src="/../../images/white_kitchen.jpg" alt="Kitchen"/>
      <div class="carousel-caption d-none d-md-block">
        <h5>Kitchens</h5>
      </div>
    </div>
    {/* <div className="carousel-item">
      <img className="d-block w-100" src=".../800x400?auto=yes&bg=666&fg=444&text=Second slide" alt="Second slide"/>
    </div>
    <div className="carousel-item">
      <img className="d-block w-100" src=".../800x400?auto=yes&bg=555&fg=333&text=Third slide" alt="Third slide"/>
    </div> */}
  </div>
</div>
)

export default GalleryCategory;