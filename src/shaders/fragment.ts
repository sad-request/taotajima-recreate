import glsl from 'babel-plugin-glsl/macro';

const fragment = glsl`
  precision mediump float;

  uniform sampler2D uTexture1;
  uniform sampler2D uTexture2;

  varying vec2 vUv;
  varying vec2 vUv1;

  void main() {
    vec4 texture = texture2D(uTexture1, vUv1);
    gl_FragColor = texture;
  }
`;

export default fragment;
