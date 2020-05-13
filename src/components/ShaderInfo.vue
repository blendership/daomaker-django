<template>
  <v-container
    class="shader-info"
    justify-center
  >
    <v-flex
      xs12
      md6
      offset-md3
    >
      <v-card color="purple" class="white--text">
        <v-layout row>
          <v-flex xs12>
            <v-card-title primary-title>
              <div>
                <div class="headline">{{selectedVisualization.name}}</div>
              </div>
            </v-card-title>
          </v-flex>
        </v-layout>
        <v-divider light></v-divider>
        <v-card-actions class="pa-3">
          <v-btn
            :href="selectedVisualization.original"
            target="_blank"
          >
            <v-icon
              left
              dark
            >
              open_in_new
        