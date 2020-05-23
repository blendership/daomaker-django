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
            <v-flex xs12 sm6><code>S</code> Save screenshot</v-flex>
            <v-flex xs12 sm6><code>F</code> Switch fullscreen</v-flex>
            <v-flex xs12 sm6><code>G</code> Go back to gallery</v-flex>
            <v-flex xs12 sm6><code>F</code> Go to next animation</v-flex>
          </v-layout>

        </v-card-text>

        <h2 class="headline">
          Virtual reality
        </h2>
        <v-card-text>
          You can watch the visualisation in virtual reality. Just plug your headset and a VR button will appear. We suggest using Firefox browser on desktop or Firefox Reality on autonomous devices.
        </v-card-text>

        <h2 class="headline">
          MIDI
        </h2>
        <v-card-text>
          Animation par