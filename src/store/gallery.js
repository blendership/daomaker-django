import shaders from '@/shaders';

import router from '@/router';

const GalleryModule = {

  state: {
    visualizations: {},
    selectedVisualizationId: null,
  },

  mutations: {

    setVisualisations: (state, visualizations) => {

      state.visualizations = visualizations;

    },

    setVisualisationId(state, visualisationId) {

      state.selectedVisualizationId = visualisationId;

    },

  },

  actions: {

    loadVisualisations: ({ state, commit }) => {

      if(Object.keys(state.visualizations).length === 0){

        commit('setVisualisations',
          Object.keys(shaders).reduce((acc, shaderId) =>
              ({
                ...acc,
                [shaderId]: {
                  ...shaders[shaderId],
                  id: shaderId,
                }
              })
            , {}
          ));
      }

    },

    setVisualisation({ state, commit }, visualisationId) {

      cons