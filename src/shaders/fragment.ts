import glsl from 'babel-plugin-glsl/macro';

const fragment = glsl`
  precision mediump float;

  uniform sampler2D uTexture1;
  uniform sampler2D uTexture2;
  uniform float progress;
  uniform float time;
  uniform vec2 pixels;
  uniform vec2 accel;

  varying vec2 vUv;
  varying vec2 vUv1;


  vec2 mirrored(vec2 v){
    vec2 m = mod(v, 2.);
    return mix(m, 2.0 - m, step(1.0, m));
  }

  float tri(float p){
    return mix(p, 1.0 - p, step(0.5, p))*2.;
  }


  void main() {
    vec2 uv = gl_FragCoord.xy/pixels.xy;

    float delayValue = progress*7. - uv.y*2. + uv.x - 1.;

    delayValue = clamp(delayValue, 0., 1.);

    vec2 translateValue = progress + delayValue*accel;
    vec2 translateValue1 = vec2(-0.5, 1.)*translateValue;
    vec2 translateValue2 = vec2(-0.5, 1.)*(translateValue - 1. - accel);

    vec2 wave = sin( sin(time)*vec2(0., 0.3) + vUv.yx*vec2(0, 4.))* vec2(0, 0.5);
    vec2 xy = wave*(tri(progress)*0.5 + tri(delayValue)*0.5);

    vec2 uv1 = vUv1 + translateValue1 + xy;
    vec2 uv2 = vUv1 + translateValue2 + xy;

    vec4 rgba1 = texture2D(uTexture1, mirrored(uv1));
    vec4 rgba2 = texture2D(uTexture2, mirrored(uv2));

    vec4 rgba = mix(rgba1, rgba2, delayValue);

    // vec4 texture = texture2D(uTexture1, vUv1);
    gl_FragColor = rgba;


    // gl_FragColor = vec4(tri(progress)); //test tri function
    // gl_FragColor = vec4(delayValue); // test delayValue
    // gl_FragColor = vec4(uv, 1.,1.);
  }
`;

export default fragment;
