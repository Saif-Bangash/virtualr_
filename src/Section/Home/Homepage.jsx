import React from 'react';
import {Featuresection, Herosection, Pricing, Testimonial, Workflow, } from './index'

const Homepage = () => {
  return (
    <div>
          <Herosection />
          <Featuresection />
          <Workflow />
          <Pricing />
          <Testimonial />
    </div>
  );
}

export default Homepage;
