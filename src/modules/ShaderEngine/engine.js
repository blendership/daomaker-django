
import { throttle } from 'lodash';
import * as THREE from 'three'
import WebVR from '@/modules/WebVR';
import Stats from 'stats.js';

import config from '@/../config';
import { download, mobileCheck } from '@/modules/utils';
import ShaderParams from './shaderParams';
import GlslWrapper from './glslWrapper';

class ShaderEngine {

  constructor(shader, container) {

    this.shader = {
      vertexShader: shader.vertexShader,
      fragmentShader: shader.fragmentShader,
      controllableParams: shader.params || [],
      name: shader.name
    };

    this.shaderParams = new ShaderParams(this);
    this.glslWrapper = new GlslWrapper(this);

    this.container = container;
    this.renderer = null;
    this.mouse = { x: 0. , y: 0. };
    this.isFocus = false;
    this.currentTime = null;

    this.quality = mobileCheck() ? 0.6: 1;

    this.onWindowResize = throttle(this.onWindowResize.bind(this), 200);

    if(config.ENV === 'development'){