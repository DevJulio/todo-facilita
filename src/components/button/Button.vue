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
// O padding não atende a proporçao no login, mas faz sentido diminuir o padding para poder atender o restante do sistema
//pensando em componentização e reaproveitamento eficiente do código.
button
  padding 15px 20px
  border none
  border-radius 4px
  cursor pointer
  font-size 18px
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
