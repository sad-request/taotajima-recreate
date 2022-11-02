import React, { useState } from 'react';
import s from './MainImage.module.scss';
import * as THREE from 'three';
import { shaderMaterial } from '@react-three/drei';
import { extend, useLoader } from '@react-three/fiber';
import vertex from '../../shaders/vertex';
import fragment from '../../shaders/fragment';

type scale = { planeScaleX: number };

// const PlaneMaterial = new THREE.ShaderMaterial({
//     // uniforms
//     uniforms: {
//         uTexture1: {
//             value: THREE.ImageUtils.loadTexture('public/image1.jpeg'),
//         },
//         uTexture2: { value: new THREE.Texture() },
//         uvRate1: { value: new THREE.Vector2(1, 1) },
//     },
//     vertexShader: vertex,
//     fragmentShader: fragment,
// });

const MainImage = ({ planeScaleX }: scale) => {
    window.addEventListener('resize', resize);

    const [uvRate1Y, setUvRate1Y] = useState(
        window.innerHeight / window.innerWidth
    );

    function resize() {
        let w = window.innerWidth;
        let h = window.innerHeight;
        setUvRate1Y(h / w);
        // PlaneMaterial.uniforms.uvRate1.value.y = h / w;
        // console.log(PlaneMaterial.uniforms.uvRate1.value.y);
    }

    const PlaneMaterial = shaderMaterial(
        // uniforms
        {
            uTexture1: new THREE.Texture(),
            uTexture2: new THREE.Texture(),
            // uvRate1: uvRate1Y,
            uvRate1: new THREE.Vector2(1, uvRate1Y),
        },
        vertex,
        fragment
    );

    extend({ PlaneMaterial });

    const [image1] = useLoader(THREE.TextureLoader, ['./image1.jpeg']);

    return (
        <mesh>
            <planeGeometry args={[planeScaleX, 1, 1, 1]} />
            <planeMaterial uTexture1={image1} />
        </mesh>
    );
};

export default MainImage;
