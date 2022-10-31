import React from 'react';
import s from './MainImage.module.scss';
import * as THREE from 'three';
import { shaderMaterial } from '@react-three/drei';
import { extend, useLoader } from '@react-three/fiber';
import vertex from '../../shaders/vertex';
import fragment from '../../shaders/fragment';

const MainImage = () => {
    const PlaneMaterial = shaderMaterial(
        // uniforms
        {
            uTexture1: new THREE.Texture(),
        },
        vertex,
        fragment
    );

    extend({ PlaneMaterial });

    const [image1] = useLoader(THREE.TextureLoader, ['./image1.jpeg']);
    console.log(image1);

    return (
        <mesh>
            <planeGeometry args={[1, 1, 1, 1]} />
            <planeMaterial uTexture1={image1} />
        </mesh>
    );
};

export default MainImage;
