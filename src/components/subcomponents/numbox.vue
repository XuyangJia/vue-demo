<template>
  <div class="mui-numbox" data-numbox-min="1" data-numbox-step=1>
    <button class="mui-btn mui-btn-numbox-minus" type="button">-</button>
    <input class="mui-input-numbox" type="number" value="1" @change="countCahnged" ref="numbox">
    <button class="mui-btn mui-btn-numbox-plus" type="button">+</button>
  </div>
</template>

<script>
import mui from '../../lib/mui/js/mui.js'
export default {
	mounted() {
		mui('.mui-numbox').numbox()
  },
  methods: {
    countCahnged() {
      this.$emit('getcount', parseInt(this.$refs.numbox.value))
    }
  },
  props:['max'],
  watch: {
    'max': (newVal, oldValu) => {
      mui('.mui-numbox').numbox().setOption('max', newVal)
    }
  }
};
</script>
