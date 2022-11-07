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

    let i = 1;
    let j = 0;

    const [progressVar, setProgressVar] = useState(0);
    const [counter, setCounter] = useState(false);

    window.addEventListener('click', setCounterFunc);

    useEffect(() => {
        updateProgress();
    }, [counter]);

    function setCounterFunc() {
        setCounter(!counter);
    }

    function stopInterval(myInterval: any) {
        clearInterval(myInterval);
    }

    function updateProgress() {
        if (progressVar === 1) {
            const myInterval = setInterval(() => {
                i = +(i - 0.025).toFixed(2);
                setProgressVar(i);
                // console.log('progress = ', progressVar, 'i=', i, 'j=', j);
                if (i <= 0) {
                    stopInterval(myInterval);
                }
            }, 20);
            setProgressVar(0);
        }

        if (progressVar === 0) {
            const myInterval = setInterval(() => {
                j = +(j + 0.025).toFixed(2);
                setProgressVar(j);

                if (j >= 1) {
                    stopInterval(myInterval);
                    setProgressVar(1);
                }
            }, 20);
        }
    }

    const PlaneMaterial = shaderMaterial(
        // uniforms
        {
            progress: 0,
            time: 0,
            pixels: new THREE.Vector2(),
            accel: new THREE.Vector2(),
            uTexture1: new THREE.Texture(),
            uTexture2: new THREE.Texture(),
            uvRate1: new THREE.Vector2(),
        },
        vertex,
        fragment
    );

    extend({ PlaneMaterial });

    const [image1] = useLoader(THREE.TextureLoader, ['./im2.jpg']);
    const [image2] = useLoader(THREE.TextureLoader, ['./im3.jpg']);

    return (
        <mesh>
            <planeGeometry args={[planeScaleX, 1, 1, 1]} />
            {/* <sphereGeometry args={[0.5, 15, 32]} /> */}
            <planeMaterial
                uTexture1={image1}
                uTexture2={image2}
                progress={progressVar}
                uvRate1={new THREE.Vector2(1, uvRate1Y)}
                pixels={
                    new THREE.Vector2(window.innerHeight, window.innerWidth)
                }
                accel={new THREE.Vector2(0.5, 2.0)}
            />
        </mesh>
    );
};

export default MainImage;
