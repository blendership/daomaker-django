import DefaultVertex from './defaultVertex.glsl';
import ImageWrapper from './mainImage.glsl';
import VRWrapper from './mainVR.glsl';
import Defines from './defines.glsl';
import Uniforms from './uniforms.glsl';

class GlslWrapper {

  constructor(shaderEngine) {
    this.shaderEngine = shaderEngine;
  }

  getFragmentShader(renderType = 'image') {

    let fragmentShader = '';

    fragmentShader += Defines;
    fragmentShader += '\n';
    fragmentShader += Uniforms;

    fragmentShader += `
      
// fragme