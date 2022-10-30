import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import MainImage from '../MainImage/MainImage';
import s from './Scene.module.scss';
import Camera from '../Camera/Camera';

const Scene = () => {
    return (
        <Canvas className={s.canvas}>
            <Suspense fallback={null}>
                <MainImage />
                <Camera />
            </Suspense>
        </Canvas>
    );
};

export default Scene;
