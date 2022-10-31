import glsl from 'babel-plugin-glsl/macro';

const fragment = glsl`
  precision mediump float;

  uniform sampler2D uTexture1;

  varying vec2 vUv;

  void main() {
    vec4 texture = texture2D(uTexture1, vUv);
    gl_FragColor = texture;
  }
`;

export default fragment;
