<template>
  <button :class="buttonClass" @click="exec">
    {{ label }}
  </button>
</template>

<script>
export default {
  name: 'FAButton',
  props: {
    type: {
      type: String,
      default: 'success',
      validator(value) {
        return ['success', 'danger'].includes(value)
      }
    },
    label: {
      type: String,
      required: true
    },
    action: {
      type: Function,
      required: true
    }
  },
  computed: {
    buttonClass() {
      return this.type === 'success' ? 'success' : 'danger'
    }
  },
  methods: {
    exec() {
      this.action()
    }
  }
}
</script>

<style lang="stylus" scoped>
@import '../../assets/styles/theme.styl'

button
  padding 22px 20px
  border none
  border-radius 4px
  cursor pointer
  font-size 16px
  font-family $td-semi-bold
  color white
  width 100%

.success
  background-color $td-green

.danger
  background-color $td-red

button:hover
  opacity 0.9
</style>
