import React from 'react';
import { getImage } from '../../services/imageService';

class Viewport extends React.Component {
  render() {
    getImage('http://localhost:9000/images/brain_images/3');
    return <h1>Works</h1>;
  }
}

export default Viewport;
