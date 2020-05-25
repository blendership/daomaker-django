import { shallowMount, createLocalVue } from '@vue/test-utils';
import Vuex from 'vuex';

import { waitNextTick } from '@/../tests/unit/test.utils';
import MidiLoader from '@/components/Loaders.vue';
import Midi from '@/modules/midi';

describe('Components: Loaders', function (){

  beforeEach(() => {

    this.sandbox = createSandbox();
    this.localVue = createLocalVue();