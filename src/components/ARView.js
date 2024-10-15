import React from 'react'
import 'aframe';
// import 'ar.js';

const ARView = () => {
    return (
        <a-scene embedded arjs>
          <a-marker preset="hiro">
            <a-entity
              geometry="primitive: box"
              material="color: red"
              position="0 0.5 0"
            />
          </a-marker>
          <a-entity camera></a-entity>
        </a-scene>
      );
}

export default ARView