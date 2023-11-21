import React from "react";

const Hero = () => {
  return (
    <main className="hero container hero-combiner">
      <div className="fistsite">
        <div className="hero-content">
          <h1>YOUR FEET DESERVE THE BEST</h1>
          <p>
            YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR
            SHOES.YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR
            SHOES.
          </p>
        </div>

        <div className="btn-resize">
          <div className="hero-btn">
            <button className="red-btn">ShopNow</button>
            <button className="secondary-btn">Category</button>
          </div>
        </div>

        <div className="footer-resize">
          <div className="shopping">
            <p>Also Available On</p>
          </div>

          <div className="brand-icons">
            <img src="/imagas/flipkart.png" alt="Not found FlipCart" />
            <img src="/imagas/amazon.png" alt="Not found Amazon" />
          </div>
        </div>
      </div>

      <div className="secondSite">
        <div className="hero-shoe">
          <img src="/imagas/shoe_image.png" alt="Shoe Not Found" />
        </div>
      </div>
    </main>
  );
};

export default Hero;
