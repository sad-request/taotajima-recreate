import glsl from 'babel-plugin-glsl/macro';

const vertex = glsl`
precision mediump float;

varying vec2 vUv;
varying vec2 vUv1;

uniform vec2 uvRate1;

void main() {
  vUv = uv;
  vec2 _uv = uv - 0.5;
  vUv1 = _uv;
  vUv1 *= uvRate1.xy;

  vUv1 += 0.5;

  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);  

}
`;

export default vertex;
