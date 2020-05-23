<template>
  <v-container
    tag="section"
    style="padding-top: 0!important;"
    :style="[$vuetify.breakpoint.xsOnly ? { 'padding': '0!important' } : '']"
  >
    <v-card>
      <v-container>
        <v-layout justify-center>
          <img
            alt="logo"
            src="@/assets/logo-192.png"
          >
        </v-layout>
        <h2 class="headline">
          Description
        </h2>

        <v-card-text>
          <b>Acidoscope</b> is a web app that allows to display interactive visualisations.
        </v-card-text>

        <h2 class="headline">
          Keyboard shortcuts
        </h2>
        <v-card-text>
          <p>Some actions can be triggered by pressing the keyboard:</p>

          <v-layout row wrap>
            <v-flex xs12 sm6><code>Space</code> Play/Pause animation</v-flex>
            <v-flex xs12 sm6><code>C</code> Show/Hide controls in fullscreen</v-flex>
            <v-