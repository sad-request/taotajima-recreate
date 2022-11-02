import React from 'react';
import * as THREE from 'three';
import { PerspectiveCamera } from '@react-three/drei';

type Aspect = { aspect: number };

const Camera = ({ aspect }: Aspect) => {
    // let dist = camera.pozition.z - plane.position.z;
    // height = 1;
    //camera.fov = 2*(180/Math.PI)*Math.atan(height/(2*dist))
    // 115

    return (
        <PerspectiveCamera
            makeDefault
            fov={28}
            far={1000}
            position={[0, 0, 2]}
            aspect={aspect}
        />
    );
};

export default Camera;
