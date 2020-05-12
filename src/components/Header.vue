<template>
  <v-layout
    row
    wrap
    justify-center
  >
    <v-flex sm2 md3 xs12 align-self-center order-xs2 order-sm1 order-md1>
      <v-container justify-center class="no-padding-xs" v-if="$route.name === 'shader'">
        <v-btn
          to="/"
          color="info"
          block
        >
          <v-icon
            dark
          >
            apps
          </v-icon>
        </v-btn>
      </v-container>
    </v-flex>
    <v-flex sm8 md6 xs12 order-xs1 order-sm2 order-md2>
      <v-container text-xs-center text-md-center
      >
        <v-btn
          :to="$route.name === 'about' ? '/' : '/about'"
          class="app-name"
          flat
        >
          <img
            alt="logo"
            src="@/asse