
import Midi from '@/modules/midi';

function encoderToUpDown(value) {
  if(value > 125) {
    return 'down';
  } else if(value < 2) {
    return 'up';
  }
  return null;
}

function touchToUpDown(value) {
  if(value === 127) {
    return 'down';
  }
  return null;
}

const midi = new Midi();

const MidiModule = {

  state: {
    midiHardwareConnected: false,
    bindedParams: [
      {
        midiActionType: 'controlchange',
        controlNumber: 71,
        shaderParamIndex: 0,
        type: 'uniform',
      },
      {
        midiActionType: 'controlchange',
        controlNumber: 72,
        shaderParamIndex: 1,
        type: 'uniform',
      },
      {
        midiActionType: 'controlchange',
        controlNumber: 73,
        shaderParamIndex: 2,
        type: 'uniform',
      },
      {
        midiActionType: 'controlchange',
        controlNumber: 74,
        shaderParamIndex: 3,
        type: 'uniform',
      },
      {
        midiActionType: 'controlchange',
        controlNumber: 75,
        shaderParamIndex: 4,
        type: 'uniform',
      },
      {
        midiActionType: 'controlchange',
        controlNumber: 76,
        shaderParamIndex: 5,
        type: 'uniform',
      },
      {
        midiActionType: 'controlchange',
        controlNumber: 85,
        type: 'action',
        action: 'pause',
      },
      {
        midiActionType: 'controlchange',
        controlNumber: 28,
        type: 'action',
        action: 'nyan',
      },
    ],
  },

  mutations: {

    setMidiHardwareConnected: (state, connected) => {
      state.midiHardwareConnected = connected;
    },

  },