<template>
  <v-container
    v-if="selectedVisualization"
    class="shader-view"
  >
    <v-flex
      class="shader-container"
      xs12
    >
      <ShaderRender />
    </v-flex>

    <ShaderControl />
    <ShaderParams />
    <ShaderInfo />
  </v-container>
</template>

<style scoped>
  .shader-view{
  }
  .shader-container {
    height: 60vh;
    z-index: 0;
    position: relative;
    max-height: 520px;
  }
</style>

<script>

  import assert from 'assert';

  import ShaderControl from '@/components/ShaderControl.vue'
  import ShaderRender from '@/components/ShaderRender.vue'
  import ShaderParams from '@/components/ShaderParams.vue';
  import Sh