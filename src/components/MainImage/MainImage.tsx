import React, { useEffect, useState } from 'react';
import s from './MainImage.module.scss';
import * as THREE from 'three';
import { shaderMaterial } from '@react-three/drei';
import { extend, useLoader } from '@react-three/fiber';
import vertex from '../../shaders/vertex';
import fragment from '../../shaders/fragment';
import { useWindowSize } from '../../hooks/useWindowSize';
import { gsap } from 'gsap';

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
    }

    const [progressVar, setProgressVar] = useState(1);

    window.addEventListener('click', updateProgress);

    function updateProgress() {
        // if (progressVar === 1) {
        //     for (let i = 1; i >= 0; i -= 0.05) {
        //         setTimeout(() => {}, 20);
        //         setProgressVar(i);
        //         console.log(i);
        //     }
        //     setProgressVar(0);
        //     console.log(progressVar);
        // }
        // if (progressVar === 0) {
        //     for (let i = 0; i <= 1.05; i += 0.05) {
        //         setTimeout(() => {}, 20);
        //         setProgressVar(i);
        //         console.log(i);
        //     }
        //     setProgressVar(1);
        //     console.log(progressVar);
        // }
        if (progressVar === 0) {
            let i = 0;
            if (i <= 1.05) {
                setTimeout(() => {
                    Math.floor((i += 0.05));
                    setProgressVar(i);
                    console.log(i);
                }, 20);
            }
        }
        if (progressVar === 1) {
            let i = 1;
            if (i >= 0) {
                setTimeout(() => {
                    Math.floor((i -= 0.05));
                    setProgressVar(i);
                    console.log(i);
                }, 20);
            }
        }
    }

    const PlaneMaterial = shaderMaterial(
        // uniforms
        {
            progress: 0,
            time: 0,
            uTexture1: new THREE.Texture(),
            uTexture2: new THREE.Texture(),
            uvRate1: new THREE.Vector2(),
        },
        vertex,
        fragment
    );

    extend({ PlaneMaterial });

    const [image1] = useLoader(THREE.TextureLoader, ['./image1.jpeg']);
    const [image2] = useLoader(THREE.TextureLoader, ['./image2.png']);

    return (
        <mesh>
            <planeGeometry args={[planeScaleX, 1, 1, 1]} />
            <planeMaterial
                uTexture1={image1}
                uTexture2={image2}
                progress={progressVar}
                uvRate1={new THREE.Vector2(1, uvRate1Y)}
            />
        </mesh>
    );
};

export default MainImage;
