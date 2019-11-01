import React, { useRef, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import './slider.css';

const Slider = ({ items, label }) => {
  let carouselRef = useRef(null);
  let [carouselElement, setCarouselElement] = useState(null);
  const SLIDE_CLASS = 'slide-wrapper';

  useEffect(() => {
    setCarouselElement(carouselRef);
  }, []);

  const handleStatusFormatter = (current, total) => {
    let text = `Item ${current} of ${total} slides. `;

    if (carouselElement && carouselElement.current) {
      const item = carouselElement.current.itemsRef[current - 1];
      text += item.querySelector(`.${SLIDE_CLASS}`).getAttribute('aria-label');
    }

    // In order to inform screen reader users what item is currently shown
    return <span aria-live="polite">{text}</span>;
  }

  return (
    <div className="App">
      <div aria-labelledby="carouselheading">
        <h3 id="carouselheading" class="visually-hidden">{label}</h3>

        <Carousel 
          ref={carouselRef} 
          showThumbs={false} 
          infiniteLoop 
          useKeyboardArrows 
          statusFormatter={handleStatusFormatter}
        >
          {items.map(item => (
            <div className={SLIDE_CLASS} aria-label={item.label}>
              {item.children}
            </div>)
          )}
        </Carousel>
      </div>

    </div>
  );
};

Slider.propTypes = {
  items: PropTypes.arrayOf({
    label: PropTypes.string.isRequired,
    children: PropTypes.node.isRequired
  }),
  label: PropTypes.string.isRequired
}

export default Slider;