import { shallowMount, createLocalVue } from '@vue/test-utils';
import Vuex from 'vuex';

import { waitNextTick } from '@/../tests/unit/test.utils';
import MidiLoader from '@/components/Loaders.vue';
import Midi from '@/modules/midi';

describe('Components: Loaders', function (){

  beforeEach(() => {

    this.sandbox = createSandbox();
    this.localVue = createLocalVue();
    this.localVue.use(Vuex);

    this.stubs = {
      getters: {
        midiHardwareConnected: this.sandbox.stub(),
      },
      actions: {
        setMidiHardwareStatus: this.sandbox.stub(),
      }
    };
    this.store = new Vuex.Store({
      getters: {
        midiHardwareConnected: this.stubs.getters.midiHardwareConnected,
      },
      actions: {
        setMidiHardwareStatus: this.stubs.actions.setMidiHardwareStatus,
      }
    });

    this.shallowConfig = { store: this.store,  localVue: this.localVue};
    this.stubMidiIsSupported = this.sandbox.stub(Midi, 'isSupported').returns(true);
    this.stubMidiRequestAccess = this.sandbox.stub(Midi, 'requestAccess').resolves();
    this.