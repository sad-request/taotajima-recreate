import React from 'react';
import s from './MainImage.module.scss';
import * as THREE from 'three';
import { shaderMaterial } from '@react-three/drei';
import { extend } from '@react-three/fiber';
import vertex from '../../shaders/vertex';
import fragment from '../../shaders/fragment';

const MainImage = () => {
    const PlaneMaterial = shaderMaterial(
        // uniforms
        {},
        vertex,
        fragment
    );

    extend({ PlaneMaterial });

    return (
        <mesh>
            <planeGeometry args={[1, 1, 1, 1]} />
            <planeMaterial wireframe={true} />
        </mesh>
    );
};

export default MainImage;
