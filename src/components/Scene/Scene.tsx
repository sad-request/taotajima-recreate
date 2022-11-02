import React, { Suspense, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import MainImage from '../MainImage/MainImage';
import s from './Scene.module.scss';
import Camera from '../Camera/Camera';

const Scene = () => {
    window.addEventListener('resize', resize);

    const [ScaleX, setScaleX] = useState(
        window.innerWidth / window.innerHeight
    );
    const [aspect, setAspect] = useState(1);

    function resize() {
        let w = window.innerWidth;
        let h = window.innerHeight;
        setAspect(w / h);

        if (w / h > 1) {
            setScaleX(w / h);
        }
    }

    return (
        <Canvas className={s.canvas}>
            <Suspense fallback={null}>
                <MainImage planeScaleX={ScaleX} />
                <Camera aspect={aspect} />
            </Suspense>
        </Canvas>
    );
};

export default Scene;
