import React, { useEffect } from "react";
import Img1 from "./coffee.jpg";
import Img2 from "./home.jpg";
import Img3 from "./land3.jpeg";
import "./Carousel.css";

function Carousel() {
  useEffect(() => {
    const buttons = document.querySelectorAll("[data-carousel-button]");
    buttons.forEach((button) => {
      button.addEventListener("click", () => {
        const offset = button.dataset.carouselButton === "next" ? 1 : -1;
        const slides = button
          .closest("[data-carousel]")
          .querySelector("[data-slides]");
        const activeSlide = slides.querySelector("[data-active]");
        let newIndex = [...slides.children].indexOf(activeSlide) + offset;
        if (newIndex < 0) newIndex = slides.children.length - 1;
        if (newIndex >= slides.children.length) newIndex = 0;

        slides.children[newIndex].dataset.active = true;
        delete activeSlide.dataset.active;
      });
    });
  }, []);
  return (
    <div className="body">
      <section aria-label="Newest Photos">
        <div className="carousel" data-carousel>
          <button className="carousel-btn prev" data-carousel-button="prev">
            &#8656;
          </button>
          <button className="carousel-btn next" data-carousel-button="next">
            &#8658;
          </button>
          <ul data-slides>
            <li className="slide" data-active>
              <img src={Img1} alt="nnature #1" />
            </li>
            <li className="slide">
              <img src={Img2} alt="nnature #2" />
            </li>
            <li className="slide">
              <img src={Img3} alt="nnature #3" />
            </li>
          </ul>
        </div>
      </section>
    </div>
  );
}

export default Carousel;
