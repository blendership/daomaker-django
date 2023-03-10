
<template>
  <v-flex>
    <svg
      ref="svg"
      class="slider"
      :viewBox="`0 0 ${radius * 2} ${radius * 2}`"
      @mousedown="handleMouseDown"
      @touchstart="handleMouseDown"
    >
      <circle
        class="slider-circle"
        :style="{ strokeWidth: border }"
        :r="radius - border / 2"
        :cx="radius"
        :cy="radius"
      />
      <circle
        class="slider-bar"
        :style="{
          strokeWidth: border,
          strokeDashoffset: 2 * Math.PI * (radius - border / 2) * (1 - value),
          strokeDasharray: 2 * Math.PI * (radius - border / 2)
        }"
        :r="radius - border / 2"
        :cx="radius"
        :cy="radius"
      />
    </svg>
    <div class="slider-value">
      {{ paramValue.toFixed(2) }}
    </div>
  </v-flex>
</template>


<script>
  import { mapGetters, mapActions } from 'vuex';
  import { mobileCheck } from '@/modules/utils';

  export default {
    name: 'CircularSlider',
    props: {
      propRadius: {
        type: Number,
        default: 140
      },
      propBorder: {
        type: Number,
        default: 70
      },
      paramName: {
        type: String,
        default: 'control1'
      },
      paramValue: {
        type: Number,
        default: 0.5
      },
      paramRangeStart: {
        type: Number,
        default: 0
      },
      paramRangeEnd: {
        type: Number,
        default: 1
      },
      onChange: {
        type: Function,
        default: () => {}
      },
    },
    data(){
      return {
        isPinching: false,
        x: 0,
        y: 0,
        velocity: 200,
        radius: this.propRadius,
        border: this.propBorder,
        // value: this.normalize(this.paramValue)
      }
    },
    computed: {
      ...mapGetters([]),
      value: {
        get: function () {
          return this.normalize(this.paramValue);
        }
      }
    },
    mounted: function(){

      this.x = 0;
      this.y = 0;

      if(mobileCheck() ){

        document.addEventListener('touchmove', this.handleMouseMove);
        document.addEventListener('touchend', this.handleMouseUp);

      } else {

        document.addEventListener('mousemove', this.handleMouseMove);
        document.addEventListener('mouseup', this.handleMouseUp);

      }

    },
    beforeDestroy: function(){

      if(mobileCheck() ){

        document.removeEventListener('touchmove', this.handleMouseMove);
        document.removeEventListener('touchend', this.handleMouseUp);

      } else {

        document.removeEventListener('mousemove', this.handleMouseMove);
        document.removeEventListener('mouseup', this.handleMouseUp);

      }

    },
    methods: {
      ...mapActions([]),
      handleMouseDown: function(e){

        e.preventDefault();

        const { left, top, width, height } = this.$refs.svg.getBoundingClientRect();

        const page = {
          x: 0,
          y: 0
        };

        if(mobileCheck() ){

          page.x = e.changedTouches[0].pageX;
          page.y = e.changedTouches[0].pageY;

        } else {

          page.x = e.pageX;
          page.y = e.pageY;

        }

        this.x = page.x - (left + width / 2);
        this.y = (top + height / 2) - page.y;

        this.isPinching = true;

      },
      handleMouseUp: function(){

        this.isPinching = false;

      },
      handleMouseMove: function(e){

        if(this.isPinching){

          const { left, top, width, height } = this.$refs.svg.getBoundingClientRect();

          const page = {
            x: 0,
            y: 0
          };

          if(mobileCheck() ){

            page.x = e.changedTouches[0].pageX;
            page.y = e.changedTouches[0].pageY;

          } else {

            page.x = e.pageX;
            page.y = e.pageY;

          }

          const x = page.x || - (left + width / 2);
          const y = (top + height / 2) - page.y;

          const dx = (x - this.x) / this.velocity;
          const dy = (y - this.y) / this.velocity;

          this.x = x;
          this.y = y;

          if(this.onChange){

            let xValue = this.value + dx;
            let yValue = this.value + dy;

            if(xValue < 0){

              xValue = 0;

            }

            if(xValue > 1){

              xValue = 1;

            }

            if(yValue < 0){

              yValue = 0;

            }

            if(yValue > 1){

              yValue = 1;

            }

            if(yValue !== this.value){

              console.log({ left, top, width, height,yValue, xValue, value: this.value, x: this.x, y: this.y  })
              this.onChange(this.paramName, this.denormalize(yValue) );

            }

          }

        }
      },
      normalize: function(value){

        return (value - this.paramRangeStart) / (this.paramRangeEnd - this.paramRangeStart);

      },
      denormalize: function(value){

        return value * (this.paramRangeEnd - this.paramRangeStart) + this.paramRangeStart;

      }
    }
  };

</script>
<style scoped>

  p {
    margin-top: 1rem;
    text-align: center;
    font-family: monospace;
    font-weight: bold;
    font-size: 1.4rem;
    color: #90A4AE;
  }

  .slider {
    flex: 1 1 auto;
    align-self: center;
    width: 5rem;
    height: 5rem;
    transform: rotate(-90deg);
    cursor: ns-resize;
  }
  .slider-circle,
  .slider-bar {
    fill: transparent;
  }
  .slider-circle {
    stroke: #607D8B;
  }
  .slider-bar {
    stroke: #00B0FF;
    stroke-dashoffset: 0;
    stroke-dasharray: 0;
  }

  .slider-value{
    margin-top: 10px;
  }
</style>