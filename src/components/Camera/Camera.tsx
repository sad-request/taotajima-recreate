import React from 'react';
import * as THREE from 'three';
import { PerspectiveCamera } from '@react-three/drei';

const Camera = () => {
    return (
        <PerspectiveCamera
            makeDefault
            fov={50}
            far={1000}
            position={[0, 0, 2]}
        />
    );
};

export default Camera;
