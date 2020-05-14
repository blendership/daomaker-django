
import * as THREE from 'three'

const defaultParams = [
  {
    name: 'time',
    type: 'f',
    defaultValue: 0.,
    auto: true,
  },
  {
    name: 'resolution',
    type: 'v2',
    defaultValue: [0.,0.],
    auto: true,
  },
  {
    name: 'mouse',
    type: 'v2',
    defaultValue: [0.,0.],
    auto: true,
  },
  {
    name: 'phase',
    type: 'f',
    defaultValue: 0.0,
    auto: true,
  },
  {
    name: 'iDevicePositionUniform',
    type: 'v3',
    auto: true,
  },
  {
    name: 'iDeviceRotationUniform',