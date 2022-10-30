import glsl from 'babel-plugin-glsl/macro';

const fragment = glsl`
  precision mediump float;

  void main() {
    gl_FragColor = vec4(1.0, 0.0, 1.0, 1.0);
  }
`;

export default fragment;
