import glsl from 'babel-plugin-glsl/macro';

const fragment = glsl`
  precision mediump float;

  uniform sampler2D uTexture1;
  uniform sampler2D uTexture2;
  uniform float progress;
  uniform float time;

  varying vec2 vUv;
  varying vec2 vUv1;

  void main() {

    vec4 rgba1 = texture2D(uTexture1, vUv1);
    vec4 rgba2 = texture2D(uTexture2, vUv1);

    vec4 rgba = mix(rgba1, rgba2, progress);

    // vec4 texture = texture2D(uTexture1, vUv1);
    gl_FragColor = rgba;
  }
`;

export default fragment;
