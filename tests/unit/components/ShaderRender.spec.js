import { shallowMount, createLocalVue } from '@vue/test-utils';
import Vuex from 'vuex';

import ShaderRender from '@/components/ShaderRender.vue';

describe('Components: ShaderRender', function (){

  beforeEach(() => {

    this.sandbox = createSandbox();
    this.localVue = createLocalVue();
    this.localVue.use(Vuex);

    this.stubs = {
      actions: {
        createShaderEngine: this.sandbox.stub(),
        stopShaderEngine: this.sandbox.stub(),
      }
    };
    this.store = new Vuex.Store({
      actions: {
        createShaderEngine: this.stubs.actions.createShaderEngine,
        stopShaderEngine: this.stubs.actions.stopShader