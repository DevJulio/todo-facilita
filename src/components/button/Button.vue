<template>
  <button :class="buttonClass" @click="exec" :disabled="type == 'disable' ? true : false">
    {{ label }}
  </button>
</template>

<script>
export default {
  name: 'FAButton',
  data() {
    return {
      localType: ''
    }
  },
  props: {
    type: {
      type: String,
      default: 'success',
      validator(value) {
        return ['success', 'danger', 'disable'].includes(value)
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
      switch (this.type) {
        case 'success':
          // eslint-disable-next-line vue/no-side-effects-in-computed-properties
          this.localType = 'success'
          break
        case 'danger':
          // eslint-disable-next-line vue/no-side-effects-in-computed-properties
          this.localType = 'danger'
          break
        case 'disabled':
          // eslint-disable-next-line vue/no-side-effects-in-computed-properties
          this.localType = 'disabled'
          break
      }
      return this.localType
    }
  },
  methods: {
    exec() {
      if (this.localType != 'disabled') {
        this.action()
      }
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
.disabled
  background-color $td-blue-aux
  cursor not-allowed
button:hover
  opacity 0.9
</style>
