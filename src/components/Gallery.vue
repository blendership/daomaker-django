<template>
  <v-layout
    class="gallery-container"
    justify-center
  >
    <v-flex
      xs12
    >
      <v-card>
        <v-container
          fluid
          grid-list-md
        >
          <v-layout
            row
            wrap
          >
            <v-flex
              v-for="visualization in visualizationsArray"
              :key="visualization.id"
              xs6 sm4 md3
            >
              <v-card
                :to="`/shader/${visualization.id}`"
                hover
              >
                <v-img
                  :src="getShaderScreenshots(visualization.id)"
                >
                  <v-container
                    fill-height
                    fluid
                    pa-2
                  >
                    <v-layout fill-height>
           